import React, { useState } from 'react';
import { Card, Modal, Button, CardHeader, CardFooter } from 'react-bootstrap';

const HealthcareCard = ({ provider }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    // Function to search on Google Maps
    const searchOnGoogleMaps = () => {
        const query = encodeURIComponent(provider.name);
        const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
        window.open(url, '_blank');
    };

    return (
      <Card
        className="mb-3"
        style={{
          width: "18rem",
          backgroundColor: "#4d8767",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          color: "white",
          gap: "5px",
          padding: "5px",
          textAlign: "center",
        }}
      >
        <CardHeader>
          <Card.Title>{provider.name}</Card.Title>
        </CardHeader>
        <Card.Body>
          <Card.Text>
            {" "}
            التخصص:
            {provider.specialization}
          </Card.Text>
          <CardFooter className="d-flex justify-content-center ">
            <Button
              variant="primary"
              className="position-absolute top-80 start-50 translate-middle"
              onClick={handleModalShow}
            >
              تفاصيل{" "}
            </Button>
          </CardFooter>
        </Card.Body>

        <Modal show={modalShow} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>تفاصيل الجهة</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>اسم الجهة:</strong> {provider.name}
            </p>
            <p>
              <strong>العنوان:</strong> {provider.address}
            </p>
            <p>
              <strong>المحافظة:</strong> {provider.governorate}
            </p>
            <p>
              <strong>الهاتف:</strong> {provider.phone}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={searchOnGoogleMaps}>
              بحث في خرائط جوجل
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    );
};

export default HealthcareCard;
