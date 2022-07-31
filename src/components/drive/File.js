import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function File({ file }) {
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
            <a
              href="#"
              className="btn btn-outline-dark"
              rel="noreferrer"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                color: "white",
                margin: ".5rem",
              }}
            >
              Delete
            </a>
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
