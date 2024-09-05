// src/components/ContactsList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import Filter from "./Filter";
import ContactCard from "./ContactCard"; // Assuming ContactCard is correctly handling image errors.
const ContactsList = () => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBranch, setFilterBranch] = useState("");
    const [filterRank, setFilterRank] = useState("");
  
    // Fetch contacts from the server
    useEffect(() => {
      const fetchContacts = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/contacts");
          setContacts(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchContacts();
    }, []);
  
    // Generate unique branches and ranks for filtering
    const branches = [...new Set(contacts.map((contact) => contact.BranchID))];
    const ranks = [...new Set(contacts.map((contact) => contact.CurrentRankID))];
  
    // Filter contacts
    const filteredContacts = contacts
      .filter((contact) =>
        Object.values(contact).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
      .filter((contact) =>
        filterBranch ? contact.BranchID === filterBranch : true
      )
      .filter((contact) =>
        filterRank ? contact.CurrentRankID === filterRank : true
      );
  
    return (
      <div className="container mt-3">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="ابحث..."
        />
        <div className="container d-flex justify-content-between ">
            <div className="filter-container">
        <Filter
            filter={filterRank}
            setFilter={setFilterRank}
            options={ranks} // Pass the array of ranks
            label="الدرجة"
          />
          <Filter
            filter={filterBranch}
            setFilter={setFilterBranch}
            options={branches}
            label="الفرع"
          />
          </div>
          
        </div>
  
        <div className="rcard-container">
          {filteredContacts.map((contact) => (
            <ContactCard key={contact.ConsultantID} contact={contact} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ContactsList;
  