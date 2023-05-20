import React, { useState,useRef } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import {updateProfile } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import NavbarComponent from "../drive/NavbarComponent";
import styles from "./css/Profile.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const { currentUser, logout } = useAuth();
  const [name,setName]=useState(currentUser.displayName)
  const [profilephotoURL,setprofilephotoURL]=useState(currentUser.photoURL);
  const history = useNavigate();

  const defaultpicURL="https://bootdey.com/img/Content/avatar/avatar7.png"
  const updateUserName = async (newName,newpicURL) => {
    try {
      await updateProfile(currentUser, { displayName: newName,photoURL:newpicURL });
      console.log('User name updated successfully.');
    } catch (error) {
      console.error('Error updating user name:', error);
    }
    setName(currentUser.displayName);
  };

  function handleNameChange(event){
  setName(event.target.value);
  }
  const handleEditClick = () => {
    inputRef.current.focus();
  };
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
        marginTop: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#ffffffc2",
        boxShadow: "1px 1px 1rem black"
        }}
      >
        <Card.Body>
          <div className={styles.profile}>
            <img className={styles.profileImg}  src="" alt="Profile-Img" />
           <div className={styles.inputArea}>
            <input className={styles.nameInput} ref={inputRef}
                value={name} placeholder="Click to Change Name" onChange={handleNameChange}/>
                <div className={styles.icons}><FontAwesomeIcon onClick={handleEditClick}  icon={faPencilAlt} className={styles.glowingEditIcon}  />
                 <FontAwesomeIcon onClick={()=>{updateUserName(name)}} icon={faCheck} className={styles.glowingTickIcon} />
                </div>
            </div> 
            <p>{currentUser.email}</p>
          </div> 
                      
        </Card.Body>

        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
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
