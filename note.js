// src/layout/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'; // استيراد مكونات بوتستراب

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.getElementById('sidebar').classList.toggle('active');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">دليل الهيئة</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">الرئيسية</Nav.Link>
            <Nav.Link as={Link} to="/branches">الفروع</Nav.Link>
            <Nav.Link as={Link} to="/healthcare">الجهات الصحية</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;


// src/layout/Navbar.js bootstrab
import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">دليل الهيئة</Navbar.Brand>
          <Button variant="primary" onClick={handleShow}>
            القائمة
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">الرئيسية</Nav.Link>
              <Nav.Link href="/branches">الفروع</Nav.Link>
              <Nav.Link href="/healthcare">الجهات الصحية</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default NavbarComponent;





// src/layout/Sidebar.js bootstrap
import React from 'react';
import { Offcanvas } from 'react-bootstrap';

const Sidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>القائمة الجانبية</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className="list-group">
          <li className="list-group-item"><a href="/">الرئيسية</a></li>
          <li className="list-group-item"><a href="/branches">الفروع</a></li>
          <li className="list-group-item"><a href="/healthcare">الجهات الصحية</a></li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;


// src/layout/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap'; // استيراد مكونات بوتستراب
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="sidebar" className="sidebar bg-light border-right">
      <div className="sidebar-heading p-3">القائمة</div>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/" className="list-group-item list-group-item-action bg-light">الرئيسية</Nav.Link>
        <Nav.Link as={Link} to="/branches" className="list-group-item list-group-item-action bg-light">الفروع</Nav.Link>
        <Nav.Link as={Link} to="/healthcare" className="list-group-item list-group-item-action bg-light">الجهات الصحية</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
