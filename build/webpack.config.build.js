const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

const isDev = process.env.NODE_ENV === 'development'

const config = baseConfig
module.exports = config