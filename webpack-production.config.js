var WebpackStrip = require('strip-loader')
var devConfig = require('./webpack.config.js')
var webpack = require('webpack')

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log')
}

var prodPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    })
]

devConfig.module.loaders.push(stripLoader)

devConfig.module.plugins = prodPlugins

module.exports = devConfig