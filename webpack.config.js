const path = require('path');

const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const srcDir = path.join(__dirname, 'views');

module.exports = {
    entry: path.join(srcDir, 'index.js'),
    output: {
        path: path.join(__dirname, 'public', 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
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
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.svg$/,
            loader: 'babel-loader!svg-react-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};
