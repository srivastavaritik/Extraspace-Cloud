import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

export default function File({ file, fileDeleteHandler }) {
  const db = getFirestore();
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for managing the visibility of the delete confirmation modal

  const fid = file.id;
  const deleteHandler = () => {
    const docRef = doc(db, "files", fid);

    deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
    fileDeleteHandler(fid);
    console.log({ file });
  };

  return (
    <>
      <div
        style={{
          borderRadius: ".5rem",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          color: "white",
          minHeight: "100px",
          width: "250px",
          display: "block",
          margin: "1rem",
          padding: "0.5rem",
        }}
      >
        {/* File content */}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {/* Download button */}
            <a
              href={file.url}
              target="_blank"
              className="btn btn-outline-dark"
              rel="noreferrer"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                color: "white",
                margin: ".5rem",
              }}
            >
              Download
            </a>
          </div>
          <div>
            {/* Delete button */}
            <button
              href="#"
              className="btn btn-outline-dark"
              rel="noreferrer"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                color: "white",
                margin: ".5rem",
              }}
              onClick={() => setShowDeleteModal(true)} // Set the state to show the delete confirmation modal
            >
              Delete
            </button>
          </div>
        </div>

        {/* Delete confirmation modal */}
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this file?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={deleteHandler}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

// {
//   /* <a
//   href={file.url}
//   target="_blank"
//   className="btn btn-outline-dark text-truncate w-100"
//   rel="noreferrer"
//   style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", color: "white" }}
// >
//   <FontAwesomeIcon icon={faFile} className="mr-2" />
//   {file.name}
// </a>; */
// }
