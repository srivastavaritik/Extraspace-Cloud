import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import logo from '../drive/cloudlogo.png'
import { Nav, Button } from "react-bootstrap";
import "./css/Navbar.css";



export default function NavBarComp() {

  return (
    <Navbar
      className="display-flex text-center col px-md-5 ps-2 "
      bg="dark"
      variant="dark"
    >

      <Navbar.Brand as={Link} to="/">
        <div className="left">
        <span>
          <img style={{ width: "3rem" }} src={logo} alt="" />
        </span>
        <span>ExtraSpace Drive</span>
        <div className="links">
        <Nav.Link as={Link} to={"/login"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
        </div>
        </div>

        <div className="right">
        <Link to="/login">
        <Button
          className="btn btn-outline-primary mx-2 mb-0"
          style={{
            background: "#212529",
            marginBottom: "10px",
            fontStyle: "none",
          }}
        >
          LogIn
        </Button>
      </Link>
        <Link to="/signup">
        <Button
          className="btn btn-outline-primary mx-2 mb-0"
          style={{
            background: "#212529",
            marginBottom: "10px",
            fontStyle: "none",
          }}
        >
          SignUp
        </Button>
      </Link>
        </div>
      </Navbar.Brand>
    </Navbar>
  );
}
