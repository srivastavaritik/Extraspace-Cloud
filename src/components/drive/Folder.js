import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";


export default function Folder({ folder, folderDeleteHandler }) {
  const db = getFirestore();

  const foid = folder.id;
  const deleteHandler = () => {
    const docRef = doc(db, "folders", foid);

    deleteDoc(docRef)
    .then(() => {
      console.log("folder deleted");
    })
    .catch((error) => {
      console.log(error);
    });
    folderDeleteHandler(foid);
    console.log({folder});
  };
  return (
    <>
    <Button
      to={{
        pathname: `/folder/${folder.id}`,
        state: { folder: folder },
      }}
      as={Link}
      variant="btn-outline-warning"
      className="btn-outline-dark text-truncate w-100"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", color: "white" }}
    >
      <FontAwesomeIcon icon={faFolder} className="mr-2 ml-2" />
      <span style={{ marginLeft: "5px", marginRight: 0 }}>{folder.name}</span>
    </Button>
    <div>
    <button
      href="#"
      className="btn btn-outline-dark"
      rel="noreferrer"
      style={{
        backgroundColor: "rgb(235 11 11 / 75%)",
        color: "white",
        margin: ".5rem",
      }}
      onClick={deleteHandler}
    >
      Delete
    </button>
  </div>
  </>
  );
}
