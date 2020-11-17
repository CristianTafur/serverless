const logs = module.exports;
const fs = require('fs');

logs.create = (log, error = false ) => new Promise((resolve,reject)=>{
    const date = new Date();
    const getMonth = ""+date.getMonth();
    fs.appendFile("./app/logs/logs-"+date.toLocaleDateString()+".txt", '[ '+(error?'error':'log') + ' | '+date.toLocaleTimeString()+' ] '+log + '\n', function(err) {
        if(err) {
            return reject(err);
        }
        resolve();
    });
});
