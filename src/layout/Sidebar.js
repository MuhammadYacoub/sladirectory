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
