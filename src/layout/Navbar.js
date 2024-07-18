// src/layout/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">دليل الهيئة</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">الرئيسية</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/branches">الفروع</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/healthcare">الجهات الصحية</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
