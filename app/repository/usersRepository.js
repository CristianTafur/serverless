const usersRepository = module.exports;

const DB = require('../utils/DataBase');
const config = require('../config/DataBase');

usersRepository.create = async (user) => DB('users').insert(user).returning('*');

usersRepository.findAll = async () => config;
