const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db.sqlite')

const doStuff = (query) => {
  return new Promise ((resolve, reject) => {
    db.get(query, (err, data) => {
      if(err) { reject(err) }
      else { resolve(data) }
    });
  });
};

module.exports = db;
db.doStuff = doStuff;