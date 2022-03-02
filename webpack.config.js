/*
 * @Author: lhf
 * @Date: 2022-03-01 16:44:59
 * @Description: 文件描述
 * @FilePath: \ts_in_action\webpack.config.js
 * @LastEditors: lhf
 * @LastEditTime: 2022-03-01 17:14:53
 */
const { merge } = require("webpack-merge")
const base = require("./build/webpack.base.config.js");
const dev = require("./build/webpack.dev.config.js");
const pro = require("./build/webpack.pro.config.js")

let config = process.NODE_ENV === 'development' ? dev : pro
module.exports = merge(base, config)