const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db.sqlite')

const getOne = (query) => {
  return new Promise ((resolve, reject) => {
    db.get(query, (err, data) => {
      if(err) { reject(err) }
      else { resolve(data) }
    });
  });
};
const getAll = (query) => {
  return new Promise ((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) { reject(err); }
      else { resolve(rows); }
    });
  });
}

module.exports = db;
db.getOne = getOne;
db.getAll = getAll;