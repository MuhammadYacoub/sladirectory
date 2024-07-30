// src/components/HomePage.js
import React from 'react';
import CardItem from './CardItem';
import BranchImage from '../assets/images/111.jpg';
import HealthcareImage from '../assets/images/222.jpg';
import Consulesimage from '../assets/images/333.jpg';
import HcconImage from '../assets/images/4444.jpg';


const HomePage = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <CardItem
        title="دليل مستشاري الهيئة "
        description="بيانات التواصل الخاصة بالسادة أعضاء الهيئة."
        link="/Consoles"
        image={Consulesimage} 
      />
      <CardItem
        title="مقرات الهيئة"
        description="عرض تفاصيل الفروع المختلفة."
        link="/branches"
        image={BranchImage} // صورة محلية للفروع
      />
      <CardItem
        title=" لالجهات الصحية لإداريين الهيئة"
        description="عرض تفاصيل الجهات الصحية المتعاقدة مع الهيئة."
        link="/healthcare"
        image={HealthcareImage} // صورة محلية للجهات الصحية
      />
      <CardItem
        title="الجهات الصحية لمستشاري الهيئة"
        description="عرض تفاصيل الجهات الصحية المتعاقدة مع الهيئة."
        link="/ConHC"
        image={HcconImage} // صورة محلية للجهات الصحية
      />
    </div>
  );
};

export default HomePage;
