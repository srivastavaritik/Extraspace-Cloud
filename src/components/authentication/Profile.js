import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import NavbarComponent from "../drive/NavbarComponent";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (<>
    <NavbarComponent logout={handleLogout}/>
    <CenteredContainer>
      <Card
        style = {{
        padding: "2rem",
        marginTop: "7rem",
        borderRadius: "1rem",
        backgroundColor: "#ffffffc2",
        boxShadow: "1px 1px 1rem black"
        }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <Button variant="dark" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Card>
    </CenteredContainer>
    </>
  );
}
