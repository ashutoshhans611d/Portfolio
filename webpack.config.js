const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/public/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = env => {
    return {
        mode: env.mode,
        entry: __dirname + '/src/index.js',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                        'eslint-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader','css-loader','sass-loader']
                }
            ]
        },
        output: {
            filename: 'bundle.js',
            path: __dirname + '/dist'
        },
        plugins: [HTMLWebpackPluginConfig, new webpack.ProgressPlugin()]
        
    };
};