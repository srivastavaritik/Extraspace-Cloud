import React from "react";
import { Button, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import ReactTooltip from 'react-tooltip';

export default function Footer() {
    
  return (
    <Navbar
      fixed="bottom"
      className="justify-content-between"
      bg="dark"
      variant="dark"
    >
      <div>
        <span class="badge badge-secondary">Developers:</span>
        <Button
          className="btn btn-outline-success fs-.1 mx-2 mb-0 "
          href="http://ritikk.me"
          target="_blank"
          style={{
            background: "#212529",
            marginBottom: "10px",
            fontStyle: "none",
          }}
        >
          RITIK
        </Button>

        <Button
          className="btn btn-outline-success fs-.1 mb-0"
          href="http://anjalikd.me"
          target="_blank"
          style={{
            background: "#212529",
            marginBottom: "10px",
            fontStyle: "none",
          }}
        >
          ANJALI
        </Button>
      </div>
      <div>
        <Button
          className="btn btn-outline-primary mx-2 mb-0"
            href="https://extraspace-about.netlify.app/"
          style={{
            background: "#212529",
            marginBottom: "10px",
            fontStyle: "none",
          }}
        >
          About App
        </Button>
      </div>
    </Navbar>
  );
}
