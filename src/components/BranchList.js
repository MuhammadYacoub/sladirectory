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
      <div className="row mb-3">
        <div className="col-md-6">
          <Filter
            filter={filterSector}
            setFilter={setFilterSector}
            options={sectors}
            label="القطاع"
          />
        </div>
        <div className="col-md-6">
          <Filter
            filter={filterGovernorate}
            setFilter={setFilterGovernorate}
            options={governorates}
            label="المحافظة"
          />
        </div>
      </div>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>القطاع</th>
            <th>اسم الفرع</th>
            <th>العنوان</th>
            <th>المحافظة</th>
            <th>الهاتف</th>
            <th>الفاكس</th>
          </tr>
        </thead>
        <tbody>
          {filteredBranches.map(branch => (
            <tr key={branch.م}>
              <td>{branch.القطاع}</td>
              <td>{branch['أسم الفرع ']}</td>
              <td>{branch.العنوان}</td>
              <td>{branch.المحافظة}</td>
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
