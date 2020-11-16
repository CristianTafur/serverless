const MAX_CONNECTION_POOLSIZE = 5;

const {
  DB_NAME = 'users-ms',
  DB_USER = 'postgres',
  DB_PASS = 'devPasswordFullSctack600',
  DB_HOST = 'crowdlending.c0dvhdmqym2w.us-east-1.rds.amazonaws.com',
  DB_PORT = 5432,
} = process.env;


module.exports = {
  client: 'pg',
  connection: `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  pool: { min: 1, max: MAX_CONNECTION_POOLSIZE },
  acquireConnectionTimeout: 5000,
};
