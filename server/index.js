const express = require ('express')
const App = express();
App.use(express.static('./public/dist'))
const Port = 6003

App.listen(Port, function(){
  console.log(`App is listening on port ${Port}`)
})