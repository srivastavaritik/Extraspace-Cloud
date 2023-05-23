import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import NavBarComp from "./NavBarComp";
import Footer from "./Footer";
import styles from './css/Signup.module.css';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    setError("");

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <NavBarComp />
      <CenteredContainer>
      <div className={`${styles.container} ${styles.signup_card}`}>
          {" "}
          {/* <Card> */}
          {/* <Card.Body> */}
          <h2
            className="text-center mb-4"
            style={{ filter: "drop-shadow(1px 1px #2d6076 ", color: "black" }}
          >
            Sign Up
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control
              className={styles.fullWidth}
                placeholder="Email address"
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <br />
            <Form.Group id="password">
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
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
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
