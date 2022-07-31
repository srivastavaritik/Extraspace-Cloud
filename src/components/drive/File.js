import React, { useState } from "react";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

export default function File({ file, fileDeleteHandler }) {
  const db = getFirestore();

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
        <div
          style={{
            borderRadius: ".3rem",
            backgroundColor: "#00000070",
            padding: ".3rem",
          }}
        >
          {file.name}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
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
              {/* <FontAwesomeIcon icon={faFile}  /> */}
              Download
            </a>
          </div>
          <div>
            <button
              href="#"
              className="btn btn-outline-dark"
              rel="noreferrer"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                color: "white",
                margin: ".5rem",
              }}
              onClick={deleteHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <a
  href={file.url}
  target="_blank"
  className="btn btn-outline-dark text-truncate w-100"
  rel="noreferrer"
  style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", color: "white" }}
>
  <FontAwesomeIcon icon={faFile} className="mr-2" />
  {file.name}
</a>; */
}
