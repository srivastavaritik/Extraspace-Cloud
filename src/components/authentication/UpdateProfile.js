import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import NavbarComponent from "../drive/NavbarComponent"

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
      return setError("Passwords do not match")
    }


    if (emailRef.current.value !== currentUser.email) {
      updateUserEmail(currentUser, emailRef.current.value).then(() => {
        // Update successful.
        navigate("/user")
      }).catch((error) => {
        // An error ocurred
        // ...
        setError("Failed to update account")
      });
    }
    if (passwordRef.current.value) {
      updateUserPassword(currentUser, passwordRef.current.value).then(() => {
        // Update successful.
        navigate("/")
      }).catch((error) => {
        // An error ocurred
        // ...
        setError("Failed to update account")
      });
    }
  }
    
  return (<>
    <NavbarComponent/>
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
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
      
    </CenteredContainer></>
  )
}
