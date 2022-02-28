const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/portfolio'); // Access routes and JSON by extension

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
   // Make this accessible from anywhere
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
});

app.use('/', professionalRoutes);

app.listen(8080);