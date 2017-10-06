var express = require('express');
var route = express.Router();
const moment = require('moment');

const date = moment().format('dddd, MMMM Do YYYY');
console.log("Hi", date);



route.get('/time', function(req, res) {
  // console.log(moment);
  res.json(moment().format('dddd, MMMM Do YYYY'));
});

// route.get('/oauth/callback', function(req, res) {
//   console.log(res);
//   // parse query for code
//   res.json(res);
// });


var FitbitClient = require('fitbit-client-oauth2');
var client = new FitbitClient( '228N9H', '619485e58325cb3d44084ec31d41087b' );
var redirect_uri = 'http://localhost:4000/oauth/callback';
var scope = 'activity nutrition profile settings sleep social weight heartrate';

route.get('/oauth/fitbit', function(req, res, next) {

  var authorization_uri = client.getAuthorizationUrl(redirect_uri, scope);

  res.redirect(authorization_uri);
});

// If /auth/fitbit/callbac is your redirec_uri

route.get('/oauth/callback', function(req, res, next) {

  var code = req.query.code;

  client.getToken(code, redirect_uri)
    .then(function(oauth) {
      console.log(oauth.token.access_token)
      // ... save your token on db or session...

      // then redirect
      res.redirect(302, '/#!/dashboard');

    })
    .catch(function(err) {
      // something went wrong.
      res.json(err)

    });

});





module.exports = route;
