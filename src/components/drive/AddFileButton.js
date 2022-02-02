import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { database, storage } from "../../firebase";
import { ROOT_FOLDER } from "../hooks/useFolder";

export default function AddFileButton({ currentFolder }) {
  const { currentUser } = useAuth();
  async function handleUpload(e) {
    const file = e.target.files[0];
    if (currentFolder == null || file == null) return;

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
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadingTask.snapshot.ref).then(async (url) => {
          console.log("File available at", url);
          const docRef = await addDoc(collection(database, "files"), {
              url: url,
            name: file.name,
            createdAt:serverTimestamp(),
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
    <label className="btn btn-outline-success btn-sm mr-2">
      <FontAwesomeIcon icon={faFileUpload} />
      <input
        type="file"
        onChange={handleUpload}
        style={{ opacity: 0, position: "absolute", left: "-9999px" }}
      />
    </label>
  );
}
