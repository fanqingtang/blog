/*
 * @Description:
 * @Autor: fqt
 * @Date: 2020-11-19 18:26:05
 * @LastEditors: fqt
 * @LastEditTime: 2020-11-19 20:22:25
 */
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 引入CleanWebpackPlugin插件
const PurifyCssWebpack = require('purifycss-webpack') // 引入PurifyCssWebpack插件
const glob = require('glob') // 引入glob模块,用于扫描全部html文件中所引用的css
const path = require('path')
module.exports = merge(common, { // 将webpack.common.js合并到当前文件
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(), // 所要清理的文件夹名称
    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, 'src/*.html')) // 同步扫描所有html文件中所引用的css
    })
  ]
})
