// src/components/HealthcareList.js
import React, { useState, useEffect } from 'react';
import data from '../data/conhc.json';
import Search from './Search';
import Filter from './Filter';

const HealthcareList = () => {
  const [providers, setProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGovernorate, setFilterGovernorate] = useState('');

  useEffect(() => {
    setProviders(data);
  }, []);

  const governorates = [...new Set(data.map(provider => provider.governorate))];

  const filteredProviders = providers
    .filter(provider =>
      Object.values(provider)
        .some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(provider => 
      filterGovernorate ? provider.governorate === filterGovernorate : true
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
            <th>التخصص</th>
            <th>المحافطة</th>
            {/* <th>المحافظة</th> */}
            <th>النوع</th>
          </tr>
        </thead>
        <tbody>
          {filteredProviders.map(provider => (
            <tr key={provider.id}>
              <td>{provider.name}</td>
              <td>{provider.specialization}</td>
              {/* <td>{provider.address}</td> */}
              <td>{provider.governorate}</td>
              <td>{provider.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthcareList;
