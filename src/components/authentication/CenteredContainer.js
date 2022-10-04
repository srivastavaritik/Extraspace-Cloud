import React from "react";
import { Container } from "react-bootstrap";

export default function CenteredContainer({ children }) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center profile-container" 
      style={{ minHeight: "fit-content" }}
    >
      {children}
    </Container>
  );
}
