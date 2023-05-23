import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import CenteredContainer from "./CenteredContainer";
import NavBarComp from "./NavBarComp";
import Footer from "./Footer";
import styles from './css/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <>
      <NavBarComp />
      <CenteredContainer>
        <div className={styles.container}>
          <h2 className={`${styles.heading} mb-4`}>Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email address"
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-4">
              <Form.Control
                type="password"
                placeholder="Password"
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className={styles.button}>
              Log In
            </Button>
          </Form>
          <div className={`${styles.forgotPassword} mt-3`}>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <hr className={styles.divider} />
          <div>
<div>
  <GoogleButton
    className={styles.google}
    type="dark"
    onClick={handleGoogleSignIn}
  />
</div>


          </div>
          <div className={`${styles.signup} mt-3`}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </CenteredContainer>
      <Footer />
    </>
  );
};

export default Login;
