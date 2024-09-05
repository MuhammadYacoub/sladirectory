// src/components/Search.js
import React from 'react';

// Search.js (adjust accordingly)
const Search = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
      <div className="search-bar">
          <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={placeholder}
              className="search-input"
          />
      </div>
  );
};



export default Search;
