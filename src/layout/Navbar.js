// src/layout/Navbar.js bootstrab
import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar   style={{ backgroundColor: '#e3f2fd' }} variant="light" expand="lg">
        <Button variant="btn btn-outline-primary mx-2" onClick={handleShow}>
        ◄        </Button>
        <Container>
          {/* <Navbar.Brand as={Link} to="/">دليل الهيئة</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className='navbar-brand' as={Link} to="/">الرئيسية</Nav.Link>
              <Nav.Link as={Link} to="/contactslist">دليل مستشاري الهيئة</Nav.Link>
              <Nav.Link as={Link} to="/branches">مقرات الهيئة </Nav.Link>
              <Nav.Link as={Link} to="/ConHC">الجهات الصحية لمستشاري الهيئة</Nav.Link>
              <Nav.Link as={Link} to="/healthcare"> الجهات الصحية للإداريين </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default NavbarComponent;