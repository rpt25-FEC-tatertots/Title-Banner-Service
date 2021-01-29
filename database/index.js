const sqlite3 = require('sqlite3')

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if(err) { console.log(err) }
  else {
    console.log('Connected')
    db.run(`Create Table title (
      productID INTEGER PRIMARY KEY,
      title text)`),
      (err) => {
        console.log('table already exists')
      }
  }
})
module.exports = db;
