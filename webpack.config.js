const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let prod = process.env.NODE_ENV === "production";
const projectRoot = path.resolve(__dirname, 'web');

module.exports = {
  entry: path.join(projectRoot, 'app.js'),
  output: {
    filename: "app.bundle.js",
    path: path.join(projectRoot, 'dist'),
    publicPath: "/web/dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/dist/],
        //use: [{loader: "style-loader"}, {loader: "css-loader", options: {modules: true}}]
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('app.bundle.css')
  ]
};