var express = require('express');
var path = require('path')
var request = require('request')
var server = express();
var bodyParser = require('body-parser')

server.use(express.static(path.join(__dirname, '../node_modules')))

server.use(express.static(path.join(__dirname, '../client')))
server.use(bodyParser.json())
server.post('/corgis', function(req,res){

var zipcode = req.body.zipcode;
console.log(zipcode)

request.get("http://api.petfinder.com/pet.find?key=b3d52c8692c6896d3eb1ed809a3f5271&location="+zipcode+"&format=json&animal=dog&breed=Corgi&breed=Welsh Corgi&count=30&size=S&output=basic"
, function (error, response, body) {
  if (error) throw new Error(error);

  res.json(body);
 });
})
var port = process.env.PORT || 8000;
server.listen(port);

console.log("localhost is happening! Listening on port " + port);