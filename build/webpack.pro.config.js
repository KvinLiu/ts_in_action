/*
 * @Author: lhf
 * @Date: 2022-03-01 17:05:53
 * @Description: 文件描述
 * @FilePath: \ts_in_action\build\webpack.pro.config.js
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-01 17:07:09
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ]
}