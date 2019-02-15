const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir || '')
}

module.exports = {
  dev: {
    host: '0.0.0.0',
    port: 8585,
    autoOpenBrowser: false,
    useEslint: true,
    devtool: 'inline-source-map',
    proxyTable: {},
  },
  build: {
    devtool: 'cheap-module-source-map',
    index: resolve('dist/index.html'),
    assetsRoot: resolve('dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
  },
}
