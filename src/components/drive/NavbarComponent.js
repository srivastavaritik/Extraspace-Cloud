import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import ReactTooltip from 'react-tooltip';

export default function NavbarComponent(props) {
    
  return (
    <Navbar className="display-flex justify-content-between col px-md-5" bg="dark" variant="dark"  >
      <Navbar.Brand as={Link} to="/" style={{background:"#212529"}}>ExtraSpace</Navbar.Brand>
      <Nav>
          <Nav.Link as={Link} to="/user" style={{background:"#212529", marginBottom:"10px"}}>Profile</Nav.Link>
          <Nav.Link style={{background:"#212529"}} data-tip="Double-Tap to Logout" data-for='test' as={Link} to='/user' className="material-icons" onClick={props.logout} >logout</Nav.Link>   
          <ReactTooltip id='test'/>
      </Nav>
    </Navbar>
  );
}
