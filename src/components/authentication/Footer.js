import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "material-icons/iconfont/material-icons.css";
import ContributorsModal from "./ContributorsModal";

export default function Footer() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar
      fixed="bottom"
      className="justify-content-between"
      bg="dark"
      variant="dark"
    >
      <div>
        {/* <ContributorsModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <button
          className="btn btn-outline-success mx-2 fs-.1 mb-0"
          onClick={() => setModalShow(true)}
        >
          Developers
        </button> */}
      </div>
      <div>
        <Link to="/about">
          <Button
            className="btn btn-outline-primary mx-2 mb-0"
            style={{
              background: "#212529",
              marginBottom: "10px",
              fontStyle: "none",
            }}
          >
            About App
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}
