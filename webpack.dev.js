const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: "./src/components/index.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dev"),
    filename: "bundle.js",
  },
  devtool: 'inline-source-map'
});
