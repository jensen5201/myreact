'use strict'
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../config')

/*eslint-disable*/
const resolve = dir => {
  return path.join(__dirname, '..', dir || '')
}

const commonConfig = require('./webpack.base.conf.js')

const publicConfig = {
  devtool: config.build.devtool,
  entry: {
    app: ['babel-polyfill', resolve('src/index.js')],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: config.build.assetsPublicPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CleanWebpackPlugin(['dist/*.*']),
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true,
    }),
  ],
}

module.exports = merge(commonConfig, publicConfig)
