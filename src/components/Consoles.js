import React, { useEffect, useState } from 'react';
import './style.css';
import data from '../data/simpledata.json';

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts(data);
    }, []);

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Grade</th>
                        <th>Branch</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.grade}</td>
                            <td>{contact.branch}</td>
                            <td>{contact.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactsList;
