// import path from 'path';
// import CleanWebpackPlugin from 'clean-webpack-plugin';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import webpack from 'webpack';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 4001
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Vue SPA',
      template: './index.html'
    }),
    // new ExtractTextPlugin("style.css")
  ]
}