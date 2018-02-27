var path = require('path')

const config = {
    context: path.resolve('src'),
    entry: ['./index'],
    output: {
        path: path.resolve('build/src/'),
        publicPath: '/public/assets/src/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: 'public'
    },

    watch: true,

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js']
    }
}


module.exports = config