var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');

const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults()
const moment = require('moment');



server.use(middlewares)
server.use(router)
server.use(moment)
server.listen(3000, () => {
  console.log('JSON server is running')
})


let date = moment().format()

app.use(bodyParser.json({ extended: true }));
app.use('/', routes);
app.use(express.static(__dirname + '/public'));

app.listen(4000, function() {
    console.log('Server is running :]');
    console.log(date);
  });