var express = require('express');
var route = express.Router();
const moment = require('moment');

const date = moment().format('dddd, MMMM Do YYYY');
console.log("Hi",date); 

  
  
  route.get('/time', function(req, res) {
        // console.log(moment);
          res.json(moment().format('dddd, MMMM Do YYYY'));
        });
    



module.exports = route;