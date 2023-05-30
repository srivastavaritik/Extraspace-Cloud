import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import NavBarComp from "./NavBarComp";
import "./css/ForgotPassword.css";
import Footer from "./Footer";
import { toast } from "react-hot-toast";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      const email = emailRef.current.value;
      await resetPassword(email);
      const maskedEmail = maskEmail(email);
      toast.success(
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            transition: 'slide-in-right',
          }}
        >
          <span style={{ marginRight: '0.9em' }}>
            Mail sent to {maskedEmail}{' '}
            <span
              role="img"
              aria-label="Success"
              style={{ color: 'red', transition: 'slide-in-right' }}
            >
              ✉️
            </span>
          </span>
        </div>,
        {
          autoClose: 3000,
          hideProgressBar: true,
        }
      );
      setMessage("Check your inbox for further instructions");
    } catch {
      toast.error(
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            transition: 'slide-in-right',
          }}
        >
          <span style={{ marginRight: '0.9em' }}>Failed to reset password <span role="img" aria-label="Failed">🚫</span></span>
        </div>,
        {
          autoClose: 3000,
          hideProgressBar: true,
        }
      );
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  function maskEmail(email) {
    const parts = email.split("@");
    const username = parts[0];
    const domain = parts[1];
    const maskedUsername = maskCharacters(username, 4);
    return `${maskedUsername}@${domain}`;
  }
  
  function maskCharacters(string, numVisible) {
    const visibleChars = string.slice(0, numVisible);
    const maskedChars = "*".repeat(string.length - numVisible);
    return visibleChars + maskedChars;
  }

  return (
    <>
      <NavBarComp />
      <CenteredContainer>
        <div className="ForgotPassword">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Password Reset</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" ref={emailRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Reset Password
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/login">Login</Link>
              </div>
            </Card.Body>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </Card>
        </div>
      </CenteredContainer>
      <Footer />
    </>
  );
}
