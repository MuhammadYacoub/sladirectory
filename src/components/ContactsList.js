// src/components/ContactsList.js
import React, { useState, useEffect } from 'react';
import data from '../data/simpledata.json';
import Search from './Search';
import Filter from './Filter';

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterbranch, setFilterbranch] = useState('');

  useEffect(() => {
    setContacts(data);
  }, []);

  const branchs = [...new Set(data.map(provider => provider.branch))];

  const filteredContacts = contacts
    .filter(contact =>
      Object.values(contact)
        .some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(contact => 
      filterbranch ? contact.branch === filterbranch : true
    );

  return (
    <div className="container mt-3">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="ابحث..."
      />
      <Filter
        filter={filterbranch}
        setFilter={setFilterbranch}
        options={branchs}
        label="القطاع"
      />
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>الاسم</th>
            <th>الدرجة</th>
            <th>الاقدمية</th>
            <th>الفرع</th>
            <th>العنوان</th>
            <th>الهاتف</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.grade}</td>
              <td>{contact.seniority}</td>
              <td>{contact.branch}</td>
              <td>{contact.address}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
