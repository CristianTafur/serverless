const usersServices = module.exports;

const usersRepository = require('../repository/usersRepository');

usersServices.findAll = async () => {
  const user = usersRepository.findAll();

  return user;
};

usersServices.create = async (body) => {
  const [user] = await usersRepository.create(body);

  return user;
};
