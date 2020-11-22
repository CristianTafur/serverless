const Helpers = module.exports;

const db = require('../app/utils/DataBase');

Helpers.db = db;

Helpers.migrate = () => db.migrate.latest();

Helpers.clear = async () => {
  await db('users').del();
  await db.raw('ALTER SEQUENCE campo_id_seq RESTART WITH 1');
};
