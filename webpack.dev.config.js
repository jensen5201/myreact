const path = require('path')
/*eslint-disable*/
const resolve = (dir) => {
  return path.join(__dirname, dir || '')
}

module.exports = {
  entry: ['react-hot-loader/patch', resolve('src/index.js')],
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  devServer: {
    port: 8585,
    contentBase: resolve('dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    open: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
            formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve('src'),
      },
    ],
  },
}
