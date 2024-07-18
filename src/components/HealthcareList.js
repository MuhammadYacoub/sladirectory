// src/components/HealthcareList.js
import React, { useState, useEffect } from 'react';
import data from '../data/healthcare.json';
import Search from './Search';
import Filter from './Filter';

const HealthcareList = () => {
  const [providers, setProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGovernorate, setFilterGovernorate] = useState('');

  useEffect(() => {
    setProviders(data);
  }, []);

  const governorates = [...new Set(data.map(provider => provider.المحافظة))];

  const filteredProviders = providers
    .filter(provider =>
      Object.values(provider)
        .some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(provider => 
      filterGovernorate ? provider.المحافظة === filterGovernorate : true
    );

  return (
    <div className="container mt-3">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="ابحث..."
      />
      <Filter
        filter={filterGovernorate}
        setFilter={setFilterGovernorate}
        options={governorates}
        label="المحافظة"
      />
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>اسم الجهة</th>
            <th>العنوان</th>
            <th>المحافظة</th>
            <th>الهاتف</th>
            <th>الفاكس</th>
            <th>البريد الإلكتروني</th>
          </tr>
        </thead>
        <tbody>
          {filteredProviders.map(provider => (
            <tr key={provider.م}>
              <td>{provider['أسم الجهة']}</td>
              <td>{provider.العنوان}</td>
              <td>{provider.المحافظة}</td>
              <td>{provider.التليفون}</td>
              <td>{provider.الفاكس}</td>
              <td>{provider['البريد الإلكتروني']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthcareList;
