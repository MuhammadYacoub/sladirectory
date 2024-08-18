const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3346',
    database: 'healthcare'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

const data = JSON.parse(fs.readFileSync('../sladirectory/src/data/simpledata.json', 'utf8'));

data.forEach(contact => {
    const { id, name, phone, grade, branch, address, timerank } = contact;
    const query = `
        INSERT INTO contacts (id, name, phone, grade, branch, address, timerank)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    connection.query(query, [id, name, phone, grade, branch, address, timerank], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return;
        }
        console.log('Data inserted:', results);
    });
});

connection.end();
