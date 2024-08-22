import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ContactCard = ({ contact }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);
    const [editMode, setEditMode] = useState(false);

    const handleEditContact = () => {
        // Here you can implement forms or fields modification
        console.log("Editing contact", contact.ConsultantID);
        setEditMode(true);
    }

    // Function to handle image load failure
    const handleImageError = (e) => {
        e.target.src = 'images/logo.jpg'; // Path to your default image
    };

    return (
        <div className="rcard card">
            <div className='container d-flex justify-content-center mb-3 rounded' style={{backgroundColor: "#3d638d"}}>
                <img
                    src={`images/${contact.ConsultantID}.jpg`}
                    alt={`${contact.Name}`} // Updated to use contact's name as alt text
                    className="card-img-top"
                    onClick={handleModalShow}
                    onError={handleImageError} // Event to handle the image load failure
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        marginTop: '-70px',
                        zIndex: '1',
                        position: 'relative',
                        objectPosition: 'top',
                        objectFit: 'cover',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.5)';
                        e.target.style.opacity = '0.8';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.opacity = '1';
                    }}
                />
            </div>
            <h5 className="card-header mb-3">المستشار {contact.Name}</h5>
            <div className="card-body">
                <p className="card-text">الدرجة : {contact.CurrentRankID}</p>
                {/* <p className="card-text">الفرع: {contact.BranchID}</p>
                <p className="card-text">العنوان: {contact.Address}</p>
                <p className="card-text">موبايل: {contact.PhoneNumber}</p> */}
                <Button variant="primary" onClick={handleModalShow}>عرض المزيد</Button>
            </div>
            <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header>
                    <Modal.Title>{contact.Name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={`images/${contact.ConsultantID}.jpg`} alt={`${contact.Name}`} onError={handleImageError} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                    <h4 className='p-3' >الدرجة: {contact.CurrentRankID}</h4>
                    <p>الفرع: {contact.BranchID}</p>
                    <p>العنوان: {contact.Address}</p>
                    <p>موبايل: {contact.PhoneNumber}</p>
                </Modal.Body>
                <Modal.Footer>
                    {editMode ? (
                        <Button variant="success" onClick={() => setEditMode(false)}>Save Changes</Button>
                    ) : (
                        <Button variant="secondary" onClick={handleEditContact}>Edit</Button>
                    )}
                    <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ContactCard;
