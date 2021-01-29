const express = require ('express');
const db = require('../database/index.js')
const App = express();
const Port =  process.env.PORT || 6003;
App.use(express.static('./public/dist'));

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

App.listen(Port, function(){
  console.log(`App is listening on port ${Port}`)
})