// src/components/HomePage.js
import React from 'react';
import CardItem from './CardItem';

const HomePage = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <CardItem
        title="الفروع"
        description="عرض تفاصيل الفروع المختلفة."
        link="/branches"
      />
      <CardItem
        title="الجهات الصحية"
        description="عرض تفاصيل الجهات الصحية المتعاقدة مع الهيئة."
        link="/healthcare"
      />
      <CardItem
        title="الجهات الصحية"
        description="عرض تفاصيل الجهات الصحية المتعاقدة مع الهيئة."
        link="/healthcare"
      />
      <CardItem
        title="الجهات الصحية"
        description="عرض تفاصيل الجهات الصحية المتعاقدة مع الهيئة."
        link="/healthcare"
      />
      <CardItem
        title="الجهات الصحية"
        description="عرض تفاصيل الجهات الصحية المتعاقدة مع الهيئة."
        link="/healthcare"
      />
    </div>
  );
};

export default HomePage;
