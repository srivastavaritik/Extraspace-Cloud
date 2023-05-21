import React, { useEffect, useRef } from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import logo from '../drive/cloudlogo.png'

export default function NavBarComp() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const text = textElement.textContent;
    const characters = text.split("");
    let typedText = "";

    const typeWriter = (index) => {
      if (index < characters.length) {
        typedText += characters[index];
        textElement.textContent = typedText;
        setTimeout(() => {
          typeWriter(index + 1);
        }, 150); 
      }
    };

    typeWriter(0);
  }, []);

  return (
    <Navbar
      className="d-flex justify-content-center align-items-center col px-md-5 ps-2"
      variant="dark"
    >
      <Navbar.Brand as={Link} to="/" style={{}}>
        <span>
          <img style={{ width: "3rem" }} src={logo} alt="" />
        </span>
        <span ref={textRef} style={{ letterSpacing: "0.1rem", fontFamily: "serif", fontSize: "1.3rem" }}>ExtraSpace Drive</span>
      </Navbar.Brand>
    </Navbar>
  );
}
