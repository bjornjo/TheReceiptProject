//Webpack kompilerer for utvikling
const webpack = require('webpack');
const config = require('./webpack.config');

const index = config.entry;
config.devtool = 'cheap-module-eval-source-map';

config.entry = [
    'webpack-hot-middleware/client',
    'whatwg-fetch',
    index
];

config.plugins = [
    new webpack.HotModuleReplacementPlugin()
];

module.exports = config;
