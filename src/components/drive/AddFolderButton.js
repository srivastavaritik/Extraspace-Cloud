import React, { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { database } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useAuth } from "../../contexts/AuthContext";
import { ROOT_FOLDER } from "../hooks/useFolder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddFolderButton({currentFolder}) {
  const [open, setOpen] = useState(false);
    const {currentUser} = useAuth();
  const [name, setName] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if(currentFolder == null) return

    const path = [...currentFolder.path]
    if(currentFolder !== ROOT_FOLDER){
        path.push({name: currentFolder.name, id: currentFolder.id})
    }

    //Create a folder in database
    const docRef = await addDoc(collection(database, "folders"), {
        name: name,
        parentId: currentFolder.id,
        userId: currentUser.uid,
        path: path,
        createdAt:serverTimestamp()
      });
      console.log("folderdocrefname", docRef.name)
      console.log("Document written with ID: ", docRef.id);

    setName("");
    closeModal();
  };
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <div  className='btn btn-outline-success btn-sm ms-2' onClick={openModal}>
        <FontAwesomeIcon icon={faFolderPlus}/>
    </div>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Add Folder
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}
