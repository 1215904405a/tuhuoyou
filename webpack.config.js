const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './',
    filename: '[name].bundle.js?[hash:8]'
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'tohuoyou', template: './index.html' }),
  ],
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
      }
    }]
  },
  resolve: {
    extensions: ['.js', 'json', '.jsx'],
  },
  optimization: { //优化
    minimize: false //压缩
  }
};
