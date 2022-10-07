import React from "react";
import { Nav, Button } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import ReactTooltip from 'react-tooltip';
import logo from './cloudlogo.png'

export default function NavbarComponent(props) {
    
  return (
    <Navbar
      className="display-flex justify-content-between col px-md-5"
      bg="dark"
      variant="dark"
      style={{ paddingTop: "0", paddingBottom: "0" }}
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
      <Nav>
        <Nav.Link
          as={Link}
          to="/user"
          style={{ background: "#212529", marginBottom: "10px" }}
        >
          Profile
        </Nav.Link>
        <Nav.Link
          style={{ background: "#212529" }}
          data-tip="Double-Tap to Logout"
          data-for="test"
          as={Link}
          to="/user"
          className="material-icons"
          onClick={props.logout}
        >
          logout
        </Nav.Link>
        <ReactTooltip id="test" />
      </Nav>
    </Navbar>
  );
}
