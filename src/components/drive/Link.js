import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

export default function Link({ link, linkDeleteHandler}) {
 
  const db = getFirestore();

  const lid = link.id;
  const deleteHandler = () => {
    const docRef = doc(db, "links", lid);

    deleteDoc(docRef)
    .then(() => {
      console.log("link deleted");
    })
    .catch((error) => {
      console.log(error);
    });
    linkDeleteHandler(lid);
    console.log({ link });
  };

  return (
    <>
    <a
      href={link.name}
      target="_blank"
      className="btn btn-outline-dark text-truncate w-100"
      rel="noreferrer"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", color: "white" }}
    >
      <FontAwesomeIcon icon={faLink} className="mr-2" />
      {link.name.substring(0, 15)}
    </a>
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
