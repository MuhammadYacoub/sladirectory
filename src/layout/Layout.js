// src/layout/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Navbar />
      <div className="d-flex flex-grow-1" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper" className="container-fluid">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
