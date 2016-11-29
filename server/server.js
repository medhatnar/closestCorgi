var express = require('express');
var path = require('path')
var request = require('request')
var server = express();
var bodyParser = require('body-parser')

server.use(express.static(path.join(__dirname, '../client')))
server.use(bodyParser.json())
server.post('/corgis', function(req,res){

var zipcode = req.body.zipcode;

var options = { method: 'GET',
  url: 'http://api.petfinder.com/pet.find',
  qs: 
   { key: 'b3d52c8692c6896d3eb1ed809a3f5271',
     location: zipcode,
     format: 'json',
     animal: 'dog',
     breed: [ 'Corgi', 'Welsh Corgi' ],
     count: '5',
     size: 'S',
     output: 'basic' },
  headers: 
   { 'postman-token': '85270f03-dad9-60c7-8beb-5a672b4d9f97',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  res.json(body);
 });
})

server.listen(3000);
console.log("localhost is happening!")