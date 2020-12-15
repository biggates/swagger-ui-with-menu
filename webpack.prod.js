const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
  },
  optimization: {
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[/\\]node_modules[/\\]/,
          priority: -10,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  stats: 'minimal',
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'external/**/*',
        },
        {
          from: 'specs/common/*',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/style.[contenthash].css',
    }),
  ],
  performance: {
    hints: false,
  },
});
