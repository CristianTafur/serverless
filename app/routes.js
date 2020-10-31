const { Router } = require('express');
const app = Router();

const usersControllers = require('../app/controllers/usersControllers');

app.get('/', async function (req, res) {
    res.send({message:'Hello World!'});
})

app.post('/user',usersControllers.create);

module.exports = app;