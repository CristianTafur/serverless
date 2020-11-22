const express = require('express');

const app = express();

const DB = require('./app/utils/DataBase');
const routes = require('./app/routes/routes');

app.use(express.json());
app.use(routes);
app.set('port', 3000);
app.listen(app.get('port'), async () => {
  console.log('SERVER ON PORT ', app.get('port'));
  await DB.migrate.latest();
});
module.exports = app;
