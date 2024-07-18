// src/components/BranchList.js
import React, { useState, useEffect } from 'react';
import data from '../data/branches.json';
import Search from './Search';
import Filter from './Filter';

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
        filter={filterGovernorate}
        setFilter={setFilterGovernorate}
        options={governorates}
        label="المحافظة"
      />
      <Filter
        filter={filterSector}
        setFilter={setFilterSector}
        options={sectors}
        label="القطاع"
      />
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>اسم الفرع</th>
            <th>العنوان</th>
            <th>المحافظة</th>
            <th>القطاع</th>
            <th>الهاتف</th>
            <th>الفاكس</th>
          </tr>
        </thead>
        <tbody>
          {filteredBranches.map(branch => (
            <tr key={branch.م}>
              <td>{branch['أسم الفرع ']}</td>
              <td>{branch.العنوان}</td>
              <td>{branch.المحافظة}</td>
              <td>{branch.القطاع}</td>
              <td>{branch.التليفون}</td>
              <td>{branch.الفاكس}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BranchList;
