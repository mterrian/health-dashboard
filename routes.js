const express = require('express');
const route = express.Router();
const moment = require('moment');
const FitbitClient = require('fitbit-client-oauth2');

const client = new FitbitClient(
    process.env.FITBIT_CLIENT_ID,
    process.env.FITBIT_APP_SECRET
);

route.get('/time', function(req, res) {
    res.json(moment().format('dddd, MMMM Do YYYY'));
});

const scope =
    'activity nutrition profile settings sleep social weight heartrate';

route.get('/oauth/fitbit', function(req, res, next) {
    let authorization_uri = client.getAuthorizationUrl(
        process.env.FITBIT_CALLBACK_URL,
        scope
    );

    res.redirect(authorization_uri);
});

route.get('/oauth/fitbit/callback', function(req, res, next) {
    var code = req.query.code;

    client
        .getToken(code, process.env.FITBIT_CALLBACK_URL)
        .then(function(oauth) {
            console.log(oauth.token.access_token);
            // ... save your token on db or session...

            // then redirect
            res.redirect(302, '/#!/dashboard');
        })
        .catch(function(err) {
            // something went wrong.
            res.json(err);
        });
});

module.exports = route;
