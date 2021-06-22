const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dev"),
    filename: "bundle.js",
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dev'),
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    historyApiFallback: true
  },
});
