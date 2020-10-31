const usersServices = module.exports;
const usersRepository = require('../repository/usersRepository');
usersServices.create = async (body) => {
    const [user] = await usersRepository.create(body);
    return user;
};
