const { Router } = require('express');

const app = Router();

const usersControllers = require('./controllers/usersControllers');

app.get('/', usersControllers.findAll);

app.post('/user', usersControllers.create);

module.exports = app;
