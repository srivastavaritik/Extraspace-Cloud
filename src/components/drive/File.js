import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function File({ file }) {
  return (
    <a
      href={file.url}
      target="_blank"
      className="btn btn-outline-dark text-truncate w-100"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", color: "white" }}
    >
      <FontAwesomeIcon icon={faFile} className="mr-2" />
      {file.name}
    </a>
  );
}
