/*
 * @Description:
 * @Autor: fqt
 * @Date: 2020-11-19 18:25:37
 * @LastEditors: fqt
 * @LastEditTime: 2020-11-30 17:33:08
 */

const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const Autoprefixer = require('autoprefixer')
const MiniExtractTextPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
  },
  devtool: 'source-map', // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniExtractTextPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [MiniExtractTextPlugin.loader, 'css-loader', 'postcss-loader', {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: [path.join(__dirname, '../node_modules')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: path.join('img/[name].[hash:7].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: path.join('font/[name].[hash:7].[ext]')
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'index',
      filename: 'index.html',
      template: path.join(__dirname, '../client/index.html')
    }),
    new MiniExtractTextPlugin({ filename: './css/[name].css' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(__dirname, '../public'), to: 'public' }
      ]
    }),
    Autoprefixer
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.join(__dirname, '../client'),
      '@components': path.join(__dirname, '../client/components'),
      '@img': path.join(__dirname, '../client/assets/img'),
      '@service': path.join(__dirname, '../service')
    }
  }
}
