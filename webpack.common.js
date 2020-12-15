const path = require('path');

const WebpackBarPlugin = require('webpackbar');

module.exports = {
  output: {
    filename: 'js/[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /^external\//i,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              context: path.resolve(__dirname, 'dist'),
              esModule: false,
              outputPath: './external/',
            },
          },
        ],
      },
      {
        test: /\.(json|yaml)$/i,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              context: path.resolve(__dirname, 'dist'),
              outputPath: './specs/',
              esModule: false,
              emitFile: process.env.NODE_ENV !== 'production',
              useRelativePath: process.env.NODE_ENV === 'production',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/',
              esModule: false,
              publicPath: '/',
            },
          },
        ],
      },
      {
        test: /favicon\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              esModule: false,
              outputPath: '/',
              publicPath: '/',
            },
          },
        ],
      },
    ],
  },
  plugins: [new WebpackBarPlugin()],
};
