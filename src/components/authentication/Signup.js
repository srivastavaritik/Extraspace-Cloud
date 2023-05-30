import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import NavBarComp from "./NavBarComp";
import styles from './css/Login.module.css';
import Footer from "./Footer";
import { toast } from 'react-hot-toast';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertColor, setColor] = useState("danger");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      toast.error(
        <div
            style={{
              display: 'flex',
              alignItems: 'center',
              transition: 'slide-in-right',
            }}
          >
            <span style={{ marginRight: '0.9em' }}>Passwords do not match!</span>
          <FaExclamationTriangle />
          </div>,
          {
            autoClose: 3000,
            hideProgressBar: true,
          }
      );
      return setError("Passwords do not match");
    }
    
    let len = passwordRef.current.value.length;
    if(len < 4){
      return setError("Too weak password");
    } else if(len < 6){
      setColor("warning");
      return setError("Weak password");
    }
    setError("");

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      toast.success(
        <div
            style={{
              display: 'flex',
              alignItems: 'center',
              transition: 'slide-in-right',
            }}
          >
            <span style={{ marginRight: '0.9em' }}> Account created <span role="img" aria-label="Success">🎉</span></span>
          </div>,
          {
            autoClose: 3000,
            hideProgressBar: true,
          }
      );
      navigate("/");
    } catch (err) {
      toast.error(
        <div
            style={{
              display: 'flex',
              alignItems: 'center',
              transition: 'slide-in-right',
            }}
          >
            <span style={{ marginRight: '0.9em' }}>Failed to create an account! Retry </span>
          </div>,
          {
            autoClose: 3000,
            hideProgressBar: true,
          }
      );
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <NavBarComp />
      <CenteredContainer>
        <div className={["p-4 box ", styles['container']].join(' ')}>
          {" "}
          {/* <Card> */}
          {/* <Card.Body> */}
          <h2
            className="text-centre mb-3"
            style={{ filter: "drop-shadow(1px 1px #2d6076 ", color: "black" }}
          >
            Sign Up
          </h2>
<<<<<<< Updated upstream
          {error && <Alert variant= {alertColor}>{error}</Alert>}
=======
>>>>>>> Stashed changes
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="email">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control
                placeholder="Email address"
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" id="password">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                placeholder="Password"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <br />
            <Form.Group id="password-confirm">
              {/* <Form.Label>Password Confirmation</Form.Label> */}
              <Form.Control
                placeholder="Password Confirmation"
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <br />
            <div className="d-grid gap-2">
            <Button disabled={loading} className="w-100" variant="primary" type="submit">
              Sign Up
            </Button>
            </div>
          </Form>
          {/* </Card.Body> */}
          <div
            className="w-100 text-center mt-2"
            style={{ color: "black", fontWeight: "bolder" }}
          >
            Already have an account?{" "}
            <Link to="/login" style={{ color: "blue" }}>
              Log In
            </Link>
          </div>
          {/* </Card> */}
        </div>
      </CenteredContainer>
      <Footer />
    </>
  );
}
