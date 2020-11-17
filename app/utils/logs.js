const logs = module.exports;
const fs = require('fs');

logs.create = (log, error = false) => new Promise((resolve, reject) => {
  const date = new Date();
  // eslint-disable-next-line max-len
  fs.appendFile(`./app/logs/logs-${date.toLocaleDateString()}.txt`, `[ ${error ? 'error' : 'log'} | ${date.toLocaleTimeString()} ] ${log}\n`, (err) => {
    if (err) {
      return reject(err);
    }

    return resolve();
  });
});
