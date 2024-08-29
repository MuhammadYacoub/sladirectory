// src/layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="sticky-footer">
    <button className='btn btn-primary' id='installButton' onClick={() => alert('لحفظ التطبيق على الهاتف، اضغط على زر المشاركة في متصفحك واختر "Add to Home Screen"')}>
        حفظ التطبيق على الهاتف
    </button>
</div>

  );
};

export default Footer;
