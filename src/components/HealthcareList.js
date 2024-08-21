import React, { useState, useEffect } from 'react';
import data from '../data/healthcare.json';
import Search from './Search';
import Filter from './Filter';
import HealthcareCard from './HealthcareCard'; // Ensure HealthcareCard is correctly imported

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
      <div className="d-flex flex-wrap justify-content-around">
        {filteredProviders.map(provider => (
          <HealthcareCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default HealthcareList;
