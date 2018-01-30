'use strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const favicon = require('serve-favicon');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./config');

const cors = require('cors');

const bodyParser = require('body-parser');

const webpackconfig = require('./webpack.config.dev.js');
const compiler = webpack(webpackconfig);

const app = express();

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(bodyParser.json());
app.use('/', cors());

//app.use(favicon(path.join(__dirname, 'public', 'static', 'images', 'favicon.ico')));

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackconfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

//SQL
app.use(require('./server/crud.js'));
app.use(require('./server/api.js'));

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/images/receipt.jpg', function(req, res) {
    res.sendFile(__dirname + '/views/img/receipt.jpg');
});
app.get('/images/zeipt.svg', function(req, res) {
    res.sendFile(__dirname + '/views/img/zeipt.svg');
});

// Basic error handler
app.use((err, req, res, next) => {
  /* jshint unused:false */
  console.error(err);
  // If our routes specified a specific response, then send that. Otherwise,
  // send a generic message so as not to leak anything.
  res.status(500).send(err.response || 'Something broke!');
});

if (module === require.main) {
  // Start the server
  const server = app.listen(config.get('PORT'), () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;