const app = require('./server.js');

const DB = require('./app/utils/DataBase');

app.set('port', 3000);
app.listen(app.get('port'), async () => {
  console.log('SERVER ON PORT ', app.get('port'));
  await DB.migrate.latest();
});

module.exports = app;
