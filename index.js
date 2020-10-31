const serverless = require('serverless-http');
const express = require('express');
const app = express();

const DB = require('./app/utils/DataBase');
const routes = require('./app/routes');

app.use(express.json());
app.use(routes);
app.set('port', 3000);
app.listen(app.get('port'), () => {
  console.log('SERVER ON PORT ', app.get('port'));
  DB.migrate.latest();
});
module.exports.handler = serverless(app);