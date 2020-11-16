const logs = module.exports;
const fs = require('fs');

logs.create = (log) => new Promise((resolve,reject)=>{
    const date = new Date();
    const getMonth = ""+date.getMonth();
    fs.writeFile("./app/logs/log.txt", '[ log : '+date.toLocaleDateString()+ ' ] '+log, function(err) {
        if(err) {
            return reject(err);
        }
        resolve();
    });
});
