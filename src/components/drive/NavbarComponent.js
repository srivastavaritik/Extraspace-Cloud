import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import ReactTooltip from 'react-tooltip';
import logo from './cloudlogo.png';

export default function NavbarComponent(props) {

  return (
    <Navbar
      className={`display-flex justify-content-between col px-md-5 navbar-dark`}
      bg="dark"
      style={{ paddingTop: "0", paddingBottom: "0" }}
      expand="lg"
    >
      <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center", padding: "10px 15px", fontSize: "25px" }}>
        <span>
          <img style={{ height: "4rem", width: "4rem", marginRight: "0.5rem" }} src={logo} alt="" />
        </span>
        <span style={{ letterSpacing: "0.2rem" }}>ExtraSpace</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginRight: "25px" }} />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/about" style={{ marginBottom: "2px", marginLeft: "25px", fontSize: "20px", color: "#5CE1E6"}}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/user" style={{ marginBottom: "2px", marginLeft: "25px", fontSize: "20px", color: "#5CE1E6" }}>
            Profile
          </Nav.Link>
          <Nav.Link href="https://github.com/srivastavaritik" target="_blank" rel="noopener noreferrer" style={{ marginBottom: "2px", marginLeft: "25px", fontSize: "20px", color: "#5CE1E6"}}>
            Contact Us
          </Nav.Link>

        </Nav>
        <Nav>
          <Nav.Link
            data-tip="Double-Tap to Logout"
            data-for="test"
            as={Link}
            to="/user"
            className="material-icons"
            style={{ marginLeft: "25px", color: "#5CE1E6" }}
            onClick={props.logout}
          >
            logout
          </Nav.Link>
          <ReactTooltip id="test" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}