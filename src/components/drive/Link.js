import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

export default function Link({ link,linkDeleteHandler}) {
  const db=getFirestore();
  const lin=link.id;
  const deleteHandler=()=>{
    const docRef=doc(db,"links",lin);
    deleteDoc(docRef)
      .then(()=>{
        console.log("Entire Folder has been deleted sucessfully.");
      })
      .catch((error)=>{
        console.log(error);
      })
    linkDeleteHandler(lin);
    console.log({lin});
  };
  return (
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a
          href={link.name}
          target="_blank"
          className="btn btn-outline-dark text-truncate w-60 h-50"
          rel="noreferrer"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)",marginTop:"18px", color: "white" }}
        >
        <FontAwesomeIcon icon={faLink} className="mr-2" />
        {link.name.substring(0, 15)}
        </a>

        <button
          href="#"
          className="btn btn-outline-dark"
          rel="noreferrer"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            color: "white",
            width: "90px",
            height: "38px",
            margin:"18px 0 0 0"
          }}
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
    
  );
}

