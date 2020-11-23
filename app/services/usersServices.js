const usersServices = module.exports;

const usersRepository = require('../repository/usersRepository');

usersServices.findAll = async () => {
  const {
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
  } = process.env;

  return {
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
  };
};

usersServices.create = async (body) => {
  const [user] = await usersRepository.create(body);

  return user;
};
