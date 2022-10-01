import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import CenteredContainer from "./CenteredContainer";
import NavBarComp from "./NavBarComp";
import Footer from "./Footer";

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
        <div className="p-4 box">
          <h2
            className="mb-3 text-centre"
            style={{ filter: "drop-shadow(1px 1px #2d6076 ", color: "black" }}
          >
            Login
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password" style={{ color: "black" }}>
              Forgot Password?
            </Link>
          </div>
          <hr />
          <div>
            <GoogleButton
              className="g-btn w-100"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>
          <div className="p-4 box mt-3 text-center" style={{ color: "black" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "blue" }}>
              Sign up
            </Link>
          </div>
        </div>
      </CenteredContainer>
      <Footer />
    </>
  );
};

export default Login;
