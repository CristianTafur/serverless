const usersControllers = module.exports;
const usersServices = require('../services/usersServices');
usersControllers.create =async (req, res) => {
    const {body} = req;
    return usersServices.create(body).then((response) => res.send(response)).catch((err) => next(err));
};