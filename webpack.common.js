const path = require('path');

const WebpackBarPlugin = require('webpackbar');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js'
    },
    module: {
        rules: [{
            test: /^external\//i,
            type: 'javascript/auto',
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    context: path.resolve(__dirname, 'dist'),
                    outputPath: './external/'
                }
            }]
        }, {
            test: /\.(json|yaml)$/i,
            type: 'javascript/auto',
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    context: path.resolve(__dirname, 'dist'),
                    outputPath: './specs/',
                    emitFile: process.env.NODE_ENV !== "production",
                    useRelativePath: process.env.NODE_ENV === "production"
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                    publicPath: '/'
                }
            }]
        }, {
            test: /favicon\.ico$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/',
                    publicPath: '/'
                }
            }]
        }]
    },
    plugins: [
        new WebpackBarPlugin()
    ]
}
