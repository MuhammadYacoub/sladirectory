// src/layout/Sidebar.js bootstrap
import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const Sidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header >
        <Offcanvas.Title>القائمة الجانبية</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" className=" my-2 list-group-item text-success">الرئيسية</Nav.Link>
          <Nav.Link as={Link} to="/contactslist" className="  my-2 list-group-item">دليل مستشاري الهيئة</Nav.Link>
          <Nav.Link as={Link} to="/branches" className=" my-2 list-group-item">مقرات الهيئة</Nav.Link>
          <Nav.Link as={Link} to="/healthcare" className="  my-2 list-group-item">الجهات الصحية للإداريين</Nav.Link>
          <Nav.Link as={Link} to="/ConHC" className="  my-2 list-group-item">الجهات الصحية لمستشاري الهيئة</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;