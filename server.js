const express = require('express');

const app = express();

const routes = require('./app/routes/routes');

app.use(express.json());
app.use(routes);

module.exports = app;
