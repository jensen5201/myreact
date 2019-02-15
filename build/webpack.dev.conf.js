'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const config = require('../config')

/*eslint-disable*/
const resolve = dir => {
  return path.join(__dirname, '..', dir || '')
}
const commonConfig = require('./webpack.base.conf.js')
const devConfig = {
  devtool: config.dev.devtool,
  entry: {
    app: ['babel-polyfill', 'react-hot-loader/patch', resolve('src/index.js')],
  },
  output: {
    /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
    filename: '[name].[hash].js',
  },
  devServer: {
    host: process.env.host || config.dev.host,
    port: process.env.port || config.dev.port,
    // contentBase: resolve('dist'),
    publicPath: config.dev.assetsPublicPath,
    open: config.dev.autoOpenBrowser,
    historyApiFallback: true,
    quiet: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        MOCK: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: http://${config.dev.host}:${
            config.dev.port
          }`,
        ],
      },
    }),
  ],
}
module.exports = merge(commonConfig, devConfig)
