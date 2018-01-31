const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackLoggingPlugin = require('webpack-logging-plugin');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

const srcDir = path.join(__dirname, 'views');

module.exports = {
    entry: [
        'webpack-hot-middleware/client', path.join(srcDir, 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'public', 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'views/index.html'}),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackLoggingPlugin({
            formatError: (err) => err,
            formatStats: (stats) => formatWebpackMessages(stats.toJson({}, true)),
            successCallback: () => console.log('App is running at: http://localhost:3000/')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                include: srcDir
            }, {
                test: /\.html$/,
                loader: 'html-loader?attrs[]=video:src'
            }, {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.svg$/,
                loader: 'babel-loader!svg-react-loader'
            }
        ]
    }
};
