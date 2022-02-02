import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { ROOT_FOLDER } from "../hooks/useFolder";
import { Link } from "react-router-dom";

export default function FolderBreadcrums({ currentFolder }) {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) path = [...path, ...currentFolder.path];
  return (
    <Breadcrumb
      className="flex-grow-1"
      listProps={{ className: "bg-white pl-0 m-0" }}
    >
      {path.map((folder, index) => (
        <BreadcrumbItem
          key={folder.id}
          linkAs={Link}
          linkProps={{
            to: {
                pathname: folder.id ? `/folder/${folder.id}` : "/",
                state: { folder: { ...folder, path: path.slice(1, index) } },            },
          }}
          className="text-truncate d-inline-block"
          style={{ maxWidth: "150px" }}
        >
          {folder.name}
        </BreadcrumbItem>
      ))}

      {currentFolder && (
        <BreadcrumbItem
          className="text-truncate d-inline-block"
          style={{ maxWidth: "200px" }}
          active
        >
          {currentFolder.name}
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}
