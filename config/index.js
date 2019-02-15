'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir || '')
}

module.exports = {
  dev: {
    // paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    devtool: 'eval-source-map',
    host: '0.0.0.0',
    port: 8585,
    autoOpenBrowser: false,
    useEslint: true,
    proxyTable: {},
  },
  build: {
    // paths
    assetsRoot: resolve('dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    devtool: 'cheap-module-source-map',
    index: resolve('dist/index.html'),
  },
}
