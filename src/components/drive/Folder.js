import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export default function Folder({ folder }) {
  return (
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
  );
}
