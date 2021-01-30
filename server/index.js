const express = require ('express');
const db = require('../database/index.js')
const App = express();
const Port =  process.env.PORT || 6003;
const reviews = require('./MockReview.js')

App.use('/:productID', express.static('./public/dist'))

App.get('/title/:productID', (req, res) => {
  db.get(`select * from titles where productid = ?`, req.params.productID, (err, row) => {
    if(err) {
      console.log(err)
      res.sendStatus(500).json(err.message)}
    else {
      console.log(row);
      res.send(row)}
  });
});
App.get('/reviews/:productID', (req, res) => {
  res.send(reviews)
})


App.listen(Port, function(){
  console.log(`App is listening on port ${Port}`)
})