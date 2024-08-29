const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3346',  
    database: 'statelawsuitsauthority'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.get('/api/contacts', (req, res) => {
    db.query('SELECT * FROM contacts', (err, results) => {
        if (err) {
            console.error('Error fetching contacts:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(results);
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT Password, ConsultantID FROM contacts WHERE Username = ?';

    db.query(query, [username], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            res.status(500).send('Server error');
            return;
        }

        if (results.length > 0) {
            const user = results[0];
            if (password === user.Password) { // مقارنة مباشرة بدلاً من استخدام bcrypt
                res.json({ auth: true, userId: user.ConsultantID }); // إرجاع معرف المستخدم بدلاً من token
            } else {
                res.status(401).send('Invalid credentials');
            }
        } else {
            res.status(404).send('User not found');
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
