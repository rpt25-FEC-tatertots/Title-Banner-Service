const db = require('./index.js');
const faker = require('faker');
db.serialize(()=>{
  db.run(`drop table titles`)
  db.run(`drop table categories`)
  db.run(`CREATE TABLE IF NOT EXISTS titles (
    productID INTEGER PRIMARY KEY,
    title text,
    category INTEGER,
    FOREIGN KEY (category) references categories(id))`,);
  db.run(`CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY,
    categoryName TEXT
  )`)
  db.run(`insert into titles(productID, title, category) values (1, 'Men\'s Retro Pile Fleece Jacket', ${faker.random.number({min:1, max: 9})})`, (err) => console.log(`inserted 1 into titles`, err))
  db.run(`insert into titles(productID, title, category) values (2, 'Women\'s Happy Hike Studio Pants', ${faker.random.number({min:1, max: 9})})`, (err) => console.log(`inserted 1 into titles`, err))
  db.run(`insert into titles(productID, title, category) values (3, 'Men\'s Lightweight Fjord Flannel Shirt', ${faker.random.number({min:1, max: 9})})`, (err) => console.log(`inserted 1 into titles`, err))
  for(let i = 4; i < 101; i++) {
    db.run(`insert into titles (productID, title, category) values (${i}, '${faker.commerce.productName()}', ${faker.random.number({min:1, max: 9})})`, (err) => console.log(`inserted ${i} into titles`, err));
  }
  for(let j = 1; j < 10; j++) {
    db.run(`insert into categories (id, categoryName) values (${j}, '${faker.commerce.department()}')`, (err) => console.log(`inserted ${j} into categories`, err));
  }
  console.log('seeding completed')
})


