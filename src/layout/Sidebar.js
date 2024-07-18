// src/layout/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">القائمة</div>
      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item list-group-item-action bg-light">الرئيسية</Link>
        <Link to="/branches" className="list-group-item list-group-item-action bg-light">الفروع</Link>
        <Link to="/healthcare" className="list-group-item list-group-item-action bg-light">الجهات الصحية</Link>
      </div>
    </div>
  );
};

export default Sidebar;
