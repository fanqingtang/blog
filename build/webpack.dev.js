/*
 * @Description:
 * @Autor: fqt
 * @Date: 2020-11-19 18:25:53
 * @LastEditors: fqt
 * @LastEditTime: 2020-11-19 19:16:49
 */

const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: 'localhost',
    port: 9999,
    overlay: {
      // 当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true
    },
    hot: true,
    inline: true,
    historyApiFallback: true
  }
})
