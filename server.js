const path = require('path');
const express = require('express');
const webpack = require('webpack');
const favicon = require('serve-favicon');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const cors = require('cors');

const bodyParser = require('body-parser');

const compiler = webpack(config);

const app = express();

app.use(bodyParser.json());
app.use('/', cors());

// app.use(favicon(path.join(__dirname, 'public', 'static', 'images',
// 'favicon.ico')));

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/public'));

app.get('/images/receipt.jpg', function (req, res) {
    res.sendFile(__dirname + '/views/img/receipt.jpg');
});
app.get('/images/zeipt.svg', function (req, res) {
    res.sendFile(__dirname + '/views/img/zeipt.svg');
});
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'static', 'index.html'));
});

app.listen(3000, err => {
    if (err) {
        throw new Error(err);
    }
    console.log('Listening on http://localhost:3000');
});

module.exports = app;
