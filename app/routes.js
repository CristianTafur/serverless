const { Router, json } = require('express');
const app = Router();
const logger = require('./utils/logs'); 
const usersControllers = require('../app/controllers/usersControllers');

app.get('/', async function (req, res) {
    res.send({message:'Hello World!'});
    logger.create('' + JSON.stringify({message:'Hello World!'}));
})

app.post('/user',usersControllers.create);

module.exports = app;