const usersControllers = module.exports;
const usersServices = require('../services/usersServices');

usersControllers.findAll = async (req, res) => res.status(200).send({ message: 'intregacion continua desplegada' });

usersControllers.create = async (req, res, next) => {
  const { body } = req;

  return usersServices.create(body).then((response) => res.send(response)).catch((err) => next(err));
};
