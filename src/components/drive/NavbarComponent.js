import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import logo from './cloudlogo.png';

export default function NavbarComponent(props) {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar
      className={`display-flex justify-content-between col px-md-5 ${darkMode ? "navbar-dark" : "navbar-light"}`}
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      style={{ paddingTop: "0", paddingBottom: "0" }}
      expand="lg"
    >
      <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center", padding: "10px 15px", fontSize: "25px" }}>
        <span>
          <img style={{ height: "4rem", width: "4rem", marginRight: "0.5rem" }} src={logo} alt="" />
        </span>
        <span style={{ letterSpacing: "0.2rem" }}>ExtraSpace</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/about" style={{ marginBottom: "2px", fontSize: "20px", color: darkMode ? "#5CE1E6" : "black" }}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/user" style={{ marginBottom: "2px", fontSize: "20px", color: darkMode ? "#5CE1E6" : "black" }}>
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{ marginBottom: "2px", fontSize: "20px", color: darkMode ? "#5CE1E6" : "black" }}>
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
            style={{ color: darkMode ? "#5CE1E6" : "black" }}
            onClick={props.logout}
          >
            logout
          </Nav.Link>
          <ReactTooltip id="test" />
        </Nav>
      </Navbar.Collapse>
      <div className={`dark-mode-toggle ${darkMode ? "white" : ""}`} onClick={handleDarkModeToggle}>
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} color="white" />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </div>
    </Navbar>
  );
}
