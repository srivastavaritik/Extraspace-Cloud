import React from "react";
import { Button, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import ReactTooltip from 'react-tooltip';

export default function NavBarComp() {
    
  return (
    <Navbar  className="display-flex text-center col px-md-5 ps-2" bg="dark" variant="dark"  >
      <Navbar.Brand as={Link} to="/" style={{background:"#212529"}}>ExtraSpace Drive</Navbar.Brand>
     
    </Navbar>
  );
}
