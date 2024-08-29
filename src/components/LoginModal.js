import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const LoginModal = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            if (response.data.auth) {
                sessionStorage.setItem('userId', response.data.userId); // استخدام userId بدلا من token
                onLogin();
                setShow(false); // Close the modal on successful login
            } else {
                alert('Login failed: ' + response.data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Network error');
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>تسجيل الدخول</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="username">
                        <Form.Control
                            type="text"
                            placeholder="إسم المستخدم "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control
                            type="password"
                            placeholder="كلمة المرور "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleLogin}>
                        دخول
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    إغلاق
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoginModal;
