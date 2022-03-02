/*
 * @Author: lhf
 * @Date: 2022-03-01 16:52:13
 * @Description: 文件描述
 * @FilePath: \ts_in_action\build\webpack.base.config.js
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-01 17:35:51
 */

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve("", 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
    })
  ]
};