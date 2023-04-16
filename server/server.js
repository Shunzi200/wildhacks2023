// server/index.js
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


const mysql = require('mysql');

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

// Example query
connection.query('SELECT * FROM users', (err, results, fields) => {
  if (err) {
    console.error('Error querying database:', err);
  } else {
    console.log('Results:', results);
  }
});


app.get('/api/data/:variable', (req, res) => {
  const variable = req.params.variable;
  // Use the variable to fetch data from your database or other data source
  res.json({ data: variable });
});


app.get("/api", (req, res) => {
    res.json({ message: "Hello!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//end mysql connection
connection.end();