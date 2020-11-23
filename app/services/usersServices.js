const usersServices = module.exports;

const usersRepository = require('../repository/usersRepository');

usersServices.findAll = async () => {
  const users = await usersRepository.findAll();

  return users;
};

usersServices.create = async (body) => {
  const [user] = await usersRepository.create(body);

  return user;
};
