// src/layout/Header.js
import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../assets/logo.png'; // استيراد الشعار


const Header = () => {
  return (
    <header className="header text-white p-3">
      <Container className='d-flex align-items-center justify-content-center text-center'>
      <img src={logo} alt="Logo mr-3 br-3" className="logo mr-3" style={{ height: '110px' }} /> {/* إضافة الشعار */}
      <div>
          <h1 className='mx-3'>دليل هيئة قضايا الدولة</h1>
          <h6> الفروع والخدمات والجهات الصحية المتعاقدة مع الهيئة</h6>
        </div>
      </Container>
    </header>
  );
};

export default Header;
