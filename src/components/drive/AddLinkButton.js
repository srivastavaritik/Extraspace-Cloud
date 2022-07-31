import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { Button, Form, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { database } from '../../firebase';

export default function AddLinkButton({currentFolder}) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const {currentUser} = useAuth();


    const openModal = () => {
        setOpen(true);
      };
      const closeModal = () => {
        setOpen(false);
      };
    
     const handleLink=async(e)=>{
        e.preventDefault();
        if(currentFolder == null) return

    const path = [...currentFolder.path]
    
    console.log(currentFolder.name)
    //Create a folder in database
    const docRef = await addDoc(collection(database, "links"), {
        name: name,
        parentId: currentFolder.id,
        userId: currentUser.uid,
        path: path,
        createdAt:serverTimestamp()
      });
      console.log("name",name)
      console.log("docrefname",docRef.name)
      console.log("Link written with ID: ", docRef.id);

    setName("");
    closeModal();
  };
    return (<>
      <label className='btn btn-outline-success btn-sm ms-2' onClick={openModal}>
          <FontAwesomeIcon icon={faLink}/>
      </label>
            <Modal show={open} onHide={closeModal}>
            <Form onSubmit={handleLink}>
              <ModalBody>
                <Form.Group>
                  <Form.Label>Enter URL</Form.Label>
                  <Form.Control
                    type="url"
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
                  Add URL
                </Button>
              </ModalFooter>
            </Form>
          </Modal>
          </>
    );
}
