import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";
import ReactTooltip from "react-tooltip";
import logo from "./cloudlogo.png";
import { useAuth } from "../../contexts/AuthContext";

export default function NavbarComponent(props) {
  const { handleDarkMode } = useAuth();

  return (
    <Navbar
      className="display-flex justify-content-between col px-md-5"
      bg="dark"
      variant="dark"
      style={{ paddingTop: "0", paddingBottom: "0" }}
    >
      <Navbar.Brand as={Link} to="/" style={{ background: "#212529" }}>
        <span>
          <img style={{ width: "3rem" }} src={logo} alt="" />
        </span>
        <span style={{ letterSpacing: "0.1rem" }}>ExtraSpace</span>
      </Navbar.Brand>
      <Nav>
        <span
          onClick={handleDarkMode}
          style={{ color: "#fff", cursor: "pointer" }}
          className="material-icons ms-auto fs-2"
        >
          shield_moon
        </span>
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
