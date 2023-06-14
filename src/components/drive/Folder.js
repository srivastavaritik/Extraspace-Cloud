import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

export default function Folder({ folder,folderDeleteHandler }) {
  const db=getFirestore();
  const fod=folder.id;
  const deleteHandler=()=>{
    const docRef=doc(db,"folders",fod);
    deleteDoc(docRef)
      .then(()=>{
        console.log("Entire Folder has been deleted sucessfully.");
      })
      .catch((error)=>{
        console.log(error);
      })
    folderDeleteHandler(fod);
    console.log({folder});
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
        <Button
          to={{
            pathname: `/folder/${folder.id}`,
            state: { folder: folder },
          }}
          as={Link}
          variant="btn-outline-warning"
          className="btn-outline-dark text-truncate w-95 h-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)",margin:"20px 0 0 5px", color: "white" }}
        >
          <FontAwesomeIcon icon={faFolder} className="mr-2 ml-2" />
          <span style={{ marginLeft: "5px", marginRight: 0 }}>{folder.name}</span>
        </Button>
        <button
          href="#"
          className="btn btn-outline-dark"
          rel="noreferrer"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            color: "white",
            width: "90px",
            height: "38px",
            margin:"18px 10px 0 0"
          }}
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
