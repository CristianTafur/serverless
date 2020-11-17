const { Router } = require('express');

const app = Router();

const usersControllers = require('./controllers/usersControllers');

app.get('/', usersControllers.findAll);

app.post('/user', usersControllers.create);

app.post('/create', usersControllers.createMovement);

module.exports = app;
