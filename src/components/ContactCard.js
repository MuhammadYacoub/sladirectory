import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ContactCard = ({ contact }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const handleImageError = (e) => {
    e.target.src = "images/logo.jpg"; // Path to your default image
  };

  return (
    <div className="rcard" onClick={handleModalShow}>
      <img
        src={`images/${contact.ConsultantID}.jpg`}
        alt={contact.Name}
        onError={handleImageError}
      />
      <div className="contact-details">
        <h5>{contact.Name}</h5>
        <p>رقم الأقدمية: {contact.ConsultantID}</p>
        <p>الدرجة: {contact.CurrentRankID}</p>
      </div>

      {/* Modal for additional information */}
      <Modal show={modalShow} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{contact.Name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`images/${contact.ConsultantID}.jpg`}
            alt={contact.Name}
            onError={handleImageError}
            style={{
              width: "80%",
              height: "auto",
              objectFit: "cover",
              margin: "auto",
              display: "block",
              borderRadius: "7.5%",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              border: "1px solid #ccc",
            }}
          />
          <h4 className="p-3">الدرجة: {contact.CurrentRankID}</h4>
          <p>الفرع: {contact.BranchID}</p>
          <p>العنوان: {contact.Address}</p>
          <p>موبايل: {contact.PhoneNumber}</p>
          <p>رقم الأقدمية {contact.ConsultantID}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactCard;
