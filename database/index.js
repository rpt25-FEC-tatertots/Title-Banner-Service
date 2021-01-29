const sqlite3 = require('sqlite3');
const faker = require('faker');

const db = new sqlite3.Database('db.sqlite', (err) => {
  if(err) { console.log(err) }
  else {
    console.log('Connected')
    db.run(`CREATE TABLE IF NOT EXISTS titles (
      productid INTEGER PRIMARY KEY,
      title text)`),
      (err) => {
        if (err) {}
        else {
          for (let i = 1; i < 101; i++) {
            db.run(`INSERT INTO titles (productid, title) VALUES (${i}, ${'test'})`)
            console.log('seeding', i)
          }
          console.log('done seeding')
      }}
  }
})
module.exports = db;
