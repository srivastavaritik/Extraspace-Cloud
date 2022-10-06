import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Link  } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import logo from '../drive/cloudlogo.png'
import { Nav } from "react-bootstrap";
import "./css/Navbar.css";

export default function NavBarComp() {

  return (
      <Navbar
        className="display-flex text-center col px-md-5 ps-2"
        bg="dark"
        variant="dark"
      >

        
        <Navbar.Brand as={Link} to="/">
          <span>
            <img style={{ width: "3rem" }} src={logo} alt="" />
          </span>
          <span>ExtraSpace Drive</span>
          <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
          <Nav.Link as={Link} to={"/signup"}>SignUp</Nav.Link>
        </Navbar.Brand>
      </Navbar>
  );
}
