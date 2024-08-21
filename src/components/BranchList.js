import React, { useState, useEffect } from 'react';
import data from '../data/branches.json'; // Correctly import data from your JSON file
import Search from './Search';
import Filter from './Filter';
import BranchCard from './BranchCard'; // Make sure to import BranchCard if it's in a separate file

const BranchList = () => {
  const [branches, setBranches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGovernorate, setFilterGovernorate] = useState('');
  const [filterSector, setFilterSector] = useState('');

  useEffect(() => {
    setBranches(data);
  }, []);

  const governorates = [...new Set(data.map(branch => branch.المحافظة))];
  const sectors = [...new Set(data.map(branch => branch.القطاع))];

  const filteredBranches = branches
    .filter(branch =>
      Object.values(branch)
        .some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(branch => 
      filterGovernorate ? branch.المحافظة === filterGovernorate : true
    )
    .filter(branch => 
      filterSector ? branch.القطاع === filterSector : true
    );

  return (
    <div className="container mt-3">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="ابحث..."
      />
      <Filter
        filter={filterSector}
        setFilter={setFilterSector}
        options={sectors}
        label="القطاع"
      />
      <Filter
        filter={filterGovernorate}
        setFilter={setFilterGovernorate}
        options={governorates}
        label="المحافظة"
      />

      <div className="d-flex flex-wrap justify-content-around">
        {filteredBranches.map(branch => (
          <BranchCard key={branch.م} branch={branch} />
        ))}
      </div>
    </div>
  );
};

export default BranchList;
