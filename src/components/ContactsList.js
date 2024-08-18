// src/components/ContactsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Filter from './Filter';

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBranch, setFilterBranch] = useState(''); // تغير المتغير إلى filterBranch

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/contacts'); // تأكد من صحة المسار هنا
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchContacts();
    }, []);

    // تحديد الفروع المتاحة في البيانات
    const branches = [...new Set(contacts.map(contact => contact.branch))];

    const filteredContacts = contacts
        .filter(contact =>
            Object.values(contact)
                .some(value => value && value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .filter(contact => 
            filterBranch ? contact.branch === filterBranch : true
        );

    return (
        <div className="container mt-3">
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholder="ابحث..."
            />
            <Filter
                filter={filterBranch} // استخدام filterBranch هنا
                setFilter={setFilterBranch} // تعيين filterBranch بدلاً من filterGovernorate
                options={branches} // تمرير الخيارات من الفروع
                label="الفرع" // تعديل التسمية لتكون "الفرع"
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
                        <tr key={contact.ConsultantID}>
                            <td>{contact.Name}</td>
                            <td>{contact.CurrentRankID}</td>
                            <td>{contact.ConsultantID}</td>
                            <td>{contact.BranchID}</td>
                            <td>{contact.Address}</td>
                            <td>{contact.PhoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactsList;
