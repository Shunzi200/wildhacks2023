// server/index.js
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//const mysql = require('mysql');

/*
const connection = mysql.createConnection({
  host: 'your-database-hostname',
  user: 'your-database-username',
  password: 'your-database-password',
  database: 'your-database-name'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database!');
  }
});


app.get('/api/data/:variable', (req, res) => {
  const { variable } = req.params;
  connection.query(`SELECT * FROM your-table-name WHERE your-column-name = ?`, [variable], (err, results, fields) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      console.log('Results:', results);
      res.json({ data: results });
    }
  });
});
*/

app.get('/api/data/:variable', (req, res) => {
  const { variable } = req.params;
  const results = variable;
  console.log('Results:', results);
  res.json({ data: results });
});


app.get("/api", (req, res) => {
  res.json({ message: "Hello!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//end mysql connection
//connection.end();