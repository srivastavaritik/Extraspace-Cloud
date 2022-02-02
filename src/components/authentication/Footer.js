import React from "react";
import { Button, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import ReactTooltip from 'react-tooltip';

export default function Footer() {
    
  return (
    <Navbar fixed="bottom" className="justify-content-center "  bg="dark" variant="dark"  >
          <Button className="btn btn-outline-success fs-.1" href="http://riteck.co" target="_blank" style={{background:"#212529", marginBottom:"10px", fontStyle:"none"}} >Developer</Button>
          <Button className="btn btn-outline-primary ms-2" style={{background:"#212529", marginBottom:"10px", fontStyle:"none"}} >About App</Button>
     
    </Navbar>
  );
}
