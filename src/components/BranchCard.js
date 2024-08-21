import React, { useState } from 'react';
import { Card, Modal, Button, CardFooter } from 'react-bootstrap';


const BranchCard = ({ branch }) => {
    const [modalShow, setModalShow] = useState(false);
  
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);
  
    return (
      <Card className="mb-3" style={{ width: '18rem' }}>
        <Card.Header as="h5">{branch.القطاع}</Card.Header>
        <Card.Body>
          <Card.Text>
            {branch.العنوان}
          </Card.Text>

        </Card.Body>
        <CardFooter>          <Button variant="primary" onClick={handleModalShow}>عرض المزيد</Button>
        </CardFooter>
  
        <Modal show={modalShow} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>تفاصيل الفرع</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>القطاع:</strong> {branch.القطاع}</p>
            <p><strong>المحافظة:</strong> {branch.المحافظة}</p>
            <p><strong>العنوان:</strong> {branch.العنوان}</p>
            <p><strong>الهاتف:</strong> {branch.التليفون}</p>
            <p><strong>الفاكس:</strong> {branch.الفاكس}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Card>
    );
  };
  
  export default BranchCard;