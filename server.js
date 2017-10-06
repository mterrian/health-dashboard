require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

if (
    !process.env.FITBIT_CLIENT_ID ||
    !process.env.FITBIT_APP_SECRET ||
    !process.env.FITBIT_CALLBACK_URL
) {
    console.error('ENVIRONMENT VARIABLES NOT SET');
    return;
}
server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON server is running');
});

app.use(
    bodyParser.json({
        extended: true
    })
);
app.use('/', routes);
// launch angular app
app.use(express.static(__dirname + '/public'));

// @TODO remove and use gulp
if (process.env.ENVIRONMENT === 'development') {
    const browserSync = require('browser-sync');
    const bsApp = browserSync.create().init({
        logSnippet: false,
        proxy: 'localhost:4000',
        files: [
            '*.js',
            '.env',
            'db.json',
            'public/**/*.*',
            'node_modules/**/*.*'
        ],
        port: 4000
    });
    app.use(require('connect-browser-sync')(bsApp));
}

app.listen(4000, function() {
    console.log('Server is running :]');
});
