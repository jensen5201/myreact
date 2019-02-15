const path = require('path')

/*eslint-disable*/
const resolve = dir => {
  return path.join(__dirname, '..', dir || '')
}

const commonConfig = {
  resolve: {
    alias: {
      '@': resolve('src'),
      mock: resolve('mock'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: resolve('src'),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
}
module.exports = commonConfig
