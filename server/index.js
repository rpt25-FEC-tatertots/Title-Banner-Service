const express = require ('express');
const db = require('./database/index.js')
const App = express();
const Port =  process.env.PORT || 6003;
App.use(express.static('./public/dist'));

App.get('/title/:productID', (req, res) => {
  db.get(`select * from title where title = ${req.params.productID}`, (err, row) => {
    if(err) {res.sendStatus(500).json(err.message)}
    else {res.json(row)}
  });
});

App.listen(Port, function(){
  console.log(`App is listening on port ${Port}`)
})