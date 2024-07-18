// src/components/LoginModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LoginModal = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleLogin = () => {
    if (password === '100200300') {
      setShow(false);
      onLogin();
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>تسجيل الدخول</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>كلمة المرور</Form.Label>
            <Form.Control
              type="password"
              placeholder="ادخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleLogin}>
            دخول
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
