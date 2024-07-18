// src/components/Search.js
import React from 'react';

const Search = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder={placeholder}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
