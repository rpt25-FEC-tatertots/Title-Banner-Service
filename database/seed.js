const db = require('./index.js');
const faker = require('faker');

db.run(`CREATE TABLE IF NOT EXISTS titles (
  productID INTEGER PRIMARY KEY,
  title text)`);

for(let i = 1; i < 101; i++) {
  db.run(`insert into titles (productID, title) values (${i}, '${faker.commerce.productName()}')`, (err) => console.log(`inserted ${i}`, err));
}
console.log('seeding completed')

