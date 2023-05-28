import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { database, storage } from "../../firebase";
import { ROOT_FOLDER } from "../hooks/useFolder";
import { v4 as uuidV4 } from "uuid";
import ReactDOM from "react-dom";
import { ProgressBar, Toast } from "react-bootstrap";

export default function AddFileButton({ currentFolder }) {
  const [uploadingFiles, setUploadingFiles] = useState([]);
  const { currentUser } = useAuth();
  async function handleUpload(e) {
    const file = e.target.files[0];
    if (currentFolder == null || file == null) return;

    const id = uuidV4();
    setUploadingFiles((prevUploadingFiles) => [
      ...prevUploadingFiles,
      { id: id, name: file.name, progress: 0, error: false },
    ]);

    const filePath =
      currentFolder === ROOT_FOLDER
        ? `${currentFolder.path.map((x) => x.name).join("/")}/${file.name}`
        : `${currentFolder.path.map((x) => x.name).join("/")}/${
            currentFolder.name
          }/${file.name}`;

    const uploadTask = ref(storage, `/files/${currentUser.uid}/${filePath}`);
    const uploadingTask = uploadBytesResumable(uploadTask, file);
    uploadingTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("default case");
            break;
        }
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, progress: progress };
            }

            return uploadFile;
          });
        });
      },
      () => {
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, error: true };
            }
            return uploadFile;
          });
        });
      },
      () => {
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.filter((uploadFile) => {
            return uploadFile.id !== id;
          });
        });
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadingTask.snapshot.ref).then(async (url) => {
          console.log("File available at", url);
          const docRef = await addDoc(collection(database, "files"), {
            url: url,
            name: file.name,
            createdAt: serverTimestamp(),
            folderId: currentFolder.id,
            userId: currentUser.uid,
          });
          console.log("Document written with ID: ", docRef.id);
        });
      }
    );
    // storage
    //   .ref(`/files/${currentUser.uid}/${filePath}`)
    //   .put(file);
  }
  return (
    <>
      <label className="btn btn-outline-success btn-sm mx-2" data-bs-placement="bottom" title="upload file" >
        <FontAwesomeIcon icon={faFileUpload} />
        <input
          type="file"
          onChange={handleUpload}
          style={{ opacity: 0, position: "absolute", left: "-9999px" }}
        />
      </label>
      {uploadingFiles.length > 0 &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              maxWidth: "250px",
            }}
          >
            {uploadingFiles.map((file) => (
              <Toast
                className="bg-black"
                key={file.id}
                onClose={() => {
                  setUploadingFiles((prevUploadingFiles) => {
                    return prevUploadingFiles.filter((uploadFile) => {
                      return uploadFile.id !== file.id;
                    });
                  });
                }}
              >
                <Toast.Header
                  closeButton={file.error}
                  className="text-truncate w-100 d-block"
                >
                  {file.name}
                </Toast.Header>
                <Toast.Body>
                  <ProgressBar
                    animated={!file.error}
                    striped
                    variant={file.error ? "danger" : "success"}
                    now={file.error ? 100 : file.progress * 100}
                    label={
                      file.error
                        ? "Error"
                        : `${Math.round(file.progress * 100)}%`
                    }
                  />
                </Toast.Body>
              </Toast>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
