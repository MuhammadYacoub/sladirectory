// src/components/ContactsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Filter from './Filter';
import ContactCard from './ContactCard';  // Assuming ContactCard is correctly handling image errors.

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBranch, setFilterBranch] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchContacts();
    }, []);

    // Fetch branches for filtering options
    const branches = [...new Set(contacts.map(contact => contact.BranchID))];

    const filteredContacts = contacts.filter(contact =>
        Object.values(contact)
            .some(value => value && value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    ).filter(contact => 
        filterBranch ? contact.BranchID === filterBranch : true
    );

    return (
        <div className="container mt-3">
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholder="ابحث..."
            />
            <Filter
                filter={filterBranch}
                setFilter={setFilterBranch}
                options={branches}
                label="الفرع"
            />

            <div className="rcard-container">
                {filteredContacts.map(contact => (
                    <ContactCard key={contact.ConsultantID} contact={contact} />
                ))}
            </div>
        </div>
    );
};

export default ContactsList;
