/*
 * @Description:
 * @Autor: fqt
 * @Date: 2020-11-19 18:26:05
 * @LastEditors: fqt
 * @LastEditTime: 2020-11-19 19:23:49
 */
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 引入CleanWebpackPlugin插件

module.exports = merge(common, { // 将webpack.common.js合并到当前文件
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin() // 所要清理的文件夹名称
  ]
})
