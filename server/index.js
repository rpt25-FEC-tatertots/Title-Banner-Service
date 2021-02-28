const express = require ('express');
const db = require('../database/index.js')
const App = express();
const Port =  process.env.PORT || 5005;
const reviews = require('./MockReview.js');
const compression = require('compression');

App.use(compression());
App.use(express.static('./public/dist'));
App.use('/:productID/', express.static('./public/dist'));

App.get('/title/:productID', (req, res) => {
  db.getOne(`select productID, title, categoryName from titles INNER JOIN categories on titles.category = categories.id where productid = '${req.params.productID}'`)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(500).send(err.message))
});
App.get('/reviews/:productID', (req, res) => {
  db.getAll(`select rating from reviews where productid = '${req.params.productID}'`)
    .then(data => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    });
});


App.listen(Port, function(){
  console.log(`App is listening on port ${Port}`);
});