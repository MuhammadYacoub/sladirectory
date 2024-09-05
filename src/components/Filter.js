// src/components/Filter.js
import React from 'react';

const Filter = ({ filter, setFilter, options, label }) => {
  return (
    <div className="filter">
      <label>{label}</label>
      <select
        className="form-control" /* Ensures that the new styles are applied */
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">اختر {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
