const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : "production",
  entry: path.join(__dirname, "../src"),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, "../dist")
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.jsx$/, loader: 'babel-loader' },
      { test: /\.js$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: /src/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[path][name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../src/template.html')
    }),
    new VueLoaderPlugin()
  ]
}