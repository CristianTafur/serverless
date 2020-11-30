const usersRepository = module.exports;

const DB = require('../utils/DataBase');

usersRepository.create = async (user) => DB('users').insert(user).returning(['id', 'fullname', 'date']);

usersRepository.findAll = async () => DB('users').select('*');
