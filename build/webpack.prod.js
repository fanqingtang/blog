/*
 * @Description:
 * @Autor: fqt
 * @Date: 2020-11-19 18:26:05
 * @LastEditors: fqt
 * @LastEditTime: 2020-11-19 18:36:00
 */
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin') // 引入CleanWebpackPlugin插件

module.exports = merge(common, { // 将webpack.common.js合并到当前文件
  devtool: 'source-map', // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
  plugins: [
    new CleanWebpackPlugin(['dist']) // 所要清理的文件夹名称
  ]
})
