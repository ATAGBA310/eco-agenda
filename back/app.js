const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const app = express();
app.use(express.json());


app.use(express.static(path.join(__dirname, '../front')));


const dbPath = path.join(__dirname, 'events.db'); // Créer la base de données dans le dossier back


const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données', err);
    } else {
        console.log('Connexion à SQLite réussie');
        
        db.run(`CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            date TEXT NOT NULL,
            location TEXT NOT NULL
        )`);
    }
});


app.get('/api/events', (req, res) => {
    db.all('SELECT * FROM events', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});


app.post('/api/events', (req, res) => {
    const { title, date, location } = req.body;
    const query = 'INSERT INTO events (title, date, location) VALUES (?, ?, ?)';
    db.run(query, [title, date, location], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, title, date, location });
    });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
