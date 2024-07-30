// src/components/HomePage.js
import React from 'react';
import CardItem from './CardItem';
import BranchImage from '../assets/images/111.jpg';
import HealthcareImage from '../assets/images/222.jpg';

const HomePage = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <CardItem
        title="الفروع"
        description="عرض تفاصيل الفروع المختلفة."
        link="/branches"
        image={BranchImage} // صورة محلية للفروع
      />
      <CardItem
        title="الجهات الصحية"
        description="عرض تفاصيل الجهات الصحية المتعاقدة مع الهيئة."
        link="/healthcare"
        image={HealthcareImage} // صورة محلية للجهات الصحية
      />
    </div>
  );
};

export default HomePage;
