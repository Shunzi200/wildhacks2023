// server/index.js
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'wildhacks.c5jkc6kgjvet.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'BluZip60*',
  database: 'TreeDB'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database!');
  }
});

app.get('/CountryData', (req, res) => {
  con.connect(function(err) {
      con.query(`SELECT * FROM TreeDB.CountryData`, function(err, result, fields) {
          if (err) res.send(err);
          if (result) res.send(result);
      });
  });
});
console.log(res);

/*
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


app.get('/api/data/:variable', (req, res) => {
  const { variable } = req.params;
  const results = variable;
  console.log('Results:', results);
  res.json({ data: results });
});

/*
app.get("/api", (req, res) => {
  res.json({ message: "Hello!" });
});

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});*/

//end mysql connection
//connection.end();*/