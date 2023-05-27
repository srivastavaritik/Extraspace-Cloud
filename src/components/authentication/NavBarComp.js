import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import logo from '../drive/cloudlogo.png'

export default function NavBarComp() {
    
  return (
    <Navbar
      className="display-flex text-center col px-md-5 ps-2"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand as={Link} to="/" style={{ background: "#212529" }}>
        <span>
          <img style={{ width: "3rem" }} src={logo} alt="" />
        </span>
        <span style={{ letterSpacing: "0.1rem" }}>ExtraSpace Drive</span>
      </Navbar.Brand>
    </Navbar>
  );
}
