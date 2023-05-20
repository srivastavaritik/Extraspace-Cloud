import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import logo from '../drive/cloudlogo.png'
import '../../styles.css';

export default function NavBarComp() {
    
  return (
    <Navbar
      className="display-flex text-center col px-md-5 ps-2 justify-content-between"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand as={Link} to="/" style={{ background: "#212529" }}>
        <span>
          <img style={{ width: "3rem" }} src={logo} alt="" />
        </span>
        <span style={{ letterSpacing: "0.1rem" }}>ExtraSpace Drive</span>
      </Navbar.Brand>
      <div className="" >
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
            className="btn btn-outline-primary mx-2 mb-0 "
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
