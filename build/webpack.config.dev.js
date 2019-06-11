const path = require('path')
// import baseConfig from './webpack.config.base'
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

const devServer = {
  port: 8001,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  // proxy: {
  //   '/api': 'http://127.0.0.1:3001',
  //   '/user': 'http://127.0.0.1:3001'
  // },
  // historyApiFallback: true,
  hot: true
}

const config = merge(
  baseConfig,
  {
    devtool: '#cheap-module-eval-source-map',
    devServer
  }
)

module.exports = config