import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import NavbarComponent from "../drive/NavbarComponent"
import styles from './css/Login.module.css';
import { toast } from "react-hot-toast"
import { FaExclamationTriangle } from "react-icons/fa"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updateUserPassword, updateUserEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
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
      return setError("Passwords do not match")
    }


    if (emailRef.current.value !== currentUser.email) {
      updateUserEmail(currentUser, emailRef.current.value).then(() => {
        // Update successful.
        toast.success(
          <div
              style={{
                display: 'flex',
                alignItems: 'center',
                transition: 'slide-in-right',
              }}
            >
              <span style={{ marginRight: '0.9em' }}>Profile Updated <span role="img" aria-label="Done">🎉</span></span>
            </div>,
            {
              autoClose: 3000,
              hideProgressBar: true,
            }
        );
        navigate("/user")
      }).catch((error) => {
        // An error ocurred
        // ...
        toast.error(
          <div
              style={{
                display: 'flex',
                alignItems: 'center',
                transition: 'slide-in-right',
              }}
            >
              <span style={{ marginRight: '0.9em' }}>Failed to update profile <span role="img" aria-label="Failed">😞</span></span>
            </div>,
            {
              autoClose: 3000,
              hideProgressBar: true,
            }
        );
        setError("Failed to update account")
      });
    }
    if (passwordRef.current.value) {
      updateUserPassword(currentUser, passwordRef.current.value).then(() => {
        // Update successful.
        toast.success(
          <div
              style={{
                display: 'flex',
                alignItems: 'center',
                transition: 'slide-in-right',
              }}
            >
              <span style={{ marginRight: '0.9em' }}>Profile Updated <span role="img" aria-label="Done">🎉</span></span> 
            </div>,
            {
              autoClose: 3000,
              hideProgressBar: true,
            }
        );
        navigate("/")
      }).catch((error) => {
        // An error ocurred
        // ...
        toast.error(
          <div
              style={{
                display: 'flex',
                alignItems: 'center',
                transition: 'slide-in-right',
              }}
            >
              <span style={{ marginRight: '0.9em' }}>Failed to update profile <span role="img" aria-label="Failed">😞</span></span>
            </div>,
            {
              autoClose: 3000,
              hideProgressBar: true,
            }
        );
        setError("Failed to update account")
      });
    }
  }
    
  return (<>
    <NavbarComponent/>
    <CenteredContainer>
    <div className={["p-4 box", styles['container']].join(' ')}>
      <Card >
        <Card.Body>
          <h2 className="text-center mb-3" style={{ filter: "drop-shadow(1px 1px #2d6076 ", color: "black" }}>Update Profile</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
        <Link to="/user">Cancel</Link>
      </div>
      </Card>
    </div>  
    </CenteredContainer></>
  )
}
