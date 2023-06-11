import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useFolder } from "../hooks/useFolder";
import AddFolderButton from "./AddFolderButton";
import AddFileButton from "./AddFileButton";
import AddLinkButton from "./AddLinkButton";
import Folder from "./Folder";
import NavbarComponent from "./NavbarComponent";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrums from "./FolderBreadcrums";
import File from "./File";
import Link from "./Link";
import { deleteDoc } from "firebase/firestore";

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  let { folder, childFolders, childFiles, childLinks } = useFolder(
    folderId,
    state
  );
  const fileDeleteHandler = ({ fid }) => {
    childFiles = childFiles.filter((f) => f.id !== fid);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFolders = childFolders.filter((childFolder) =>
    childFolder.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavbarComponent />
      <Container fluid className="pt-2 pb-2">
        <div className="d-flex align-items-center bg-black p-2">
          <FolderBreadcrums currentFolder={folder} />
          <div className="d-flex align-items-center bg-black p-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInputChange}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              fontSize: "12px",
            }}
          />
        </div>
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
          <AddLinkButton currentFolder={folder} />
        </div>
        {filteredFolders.length > 0 && (
          <>
            <hr />
            <h3
              className="btn-light"
              style={{
                fontSize: "1.3rem",
                color: "black",
                width: "120px",
                textAlign: "center",
                padding: ".2rem .2rem .2rem .2rem",
                borderRadius: "2px",
                backgroundColor: "#c2d2df5e",
                marginLeft: "10px",
              }}
            >
              {"> "}Folders
            </h3>
          </>
        )}
        {filteredFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {filteredFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFiles.length > 0 && (
          <>
            <hr />
            <h3
              style={{
                fontSize: "1.3rem",
                color: "black",
                width: "100px",
                textAlign: "center",
                padding: ".2rem .2rem .2rem .2rem",
                borderRadius: "2px",
                backgroundColor: "#c2d2df5e",
                marginLeft: "10px",
              }}
            >
              {"> "}Files
            </h3>
          </>
        )}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childFile) => (
              <div
                key={childFile.id}
                style={{ minWidth: "250px", margin: ".5rem" }}
                className="p-2"
              >
                <File file={childFile} fileDeleteHandler={fileDeleteHandler} />
              </div>
            ))}
          </div>
        )}
        {childLinks.length > 0 && (
          <>
            <hr />
            <h3
              style={{
                fontSize: "1.3rem",
                color: "black",
                width: "100px",
                textAlign: "center",
                padding: ".2rem .2rem .2rem .2rem",
                borderRadius: "2px",
                backgroundColor: "#c2d2df5e",
                marginLeft: "10px",
              }}
            >
              {"> "}Links
            </h3>
          </>
        )}
        {childLinks.length > 0 && (
          <div className="d-flex flex-wrap">
            {childLinks.map((childLink) => (
              <div
                key={childLink.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Link link={childLink} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
