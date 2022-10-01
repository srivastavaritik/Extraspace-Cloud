import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../styles.css";

function ContributorsModal(props) {
  const [contributors, setContributors] = useState([]);
  useEffect(async () => {
    const data = await fetch(
      "https://api.github.com/repos/srivastavaritik/Extraspace-Cloud/contributors"
    );
    const contributors = await data.json();
    setContributors(contributors);
  }, []);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contributors
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            flex: "wrap",
            gap: "1rem",
          }}
        >
          {contributors.map((profile) => {
            return (
              <a key={profile.login} href={profile.html_url} target="_blank">
                <img
                  style={{ width: "48px", borderRadius: "100%" }}
                  src={profile.avatar_url}
                  alt={profile.login}
                />
              </a>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ContributorsModal;
