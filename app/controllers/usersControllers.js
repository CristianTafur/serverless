const usersControllers = module.exports;
const usersServices = require('../services/usersServices');

usersControllers.findAll = async (req, res, next) => usersServices.findAll()
  .then((response) => res.send(response)).catch((err) => next(err));

usersControllers.create = async (req, res, next) => {
  const { body } = req;

  return usersServices.create(body).then((response) => res.send(response)).catch((err) => next(err));
};
