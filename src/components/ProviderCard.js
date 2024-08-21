import React, { useState } from 'react';
import { Card, Modal, Button, CardFooter } from 'react-bootstrap';

const ProviderCard = ({ provider }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    return (
      <Card
        className="mb-3"
        style={{
          width: "18rem",
          margin: "5px",
          backgroundColor: "#4d7087",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          border: "none",
          position: "relative",
          zIndex: "1",
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          cursor: "pointer",
          objectFit: "cover",
          objectPosition: "top",
          color: "white",
          gap: "5px",
          padding: "5px",
          textAlign: "center"
        }} 
      >
        <Card.Body>
          <Card.Title>{provider.name}</Card.Title>
          <Card.Text>التخصص: {provider.specialization}</Card.Text>
          {/* <Card.Text>
                    Governorate: {provider.governorate}
                </Card.Text>
                <Card.Text>
                    Type: {provider.type}
                </Card.Text> */}
          <CardFooter className="d-flex justify-content-center">
            <Button
              variant="danger"
              onClick={handleModalShow}
              className="position-absolute top-80 start-50 translate-middle"
            >
              تفاصيل{" "}
            </Button>
          </CardFooter>
        </Card.Body>

        <Modal show={modalShow} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{provider.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Name:</strong> {provider.name}
            </p>
            <p>
              <strong>Specialization:</strong> {provider.specialization}
            </p>
            <p>
              <strong>Governorate:</strong> {provider.governorate}
            </p>
            <p>
              <strong>Type:</strong> {provider.type}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    );
};

export default ProviderCard;
