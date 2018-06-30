const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// import autoprefixer from 'autoprefixer';

module.exports = {
  entry: './www/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devServer: {
    port: 8080,
    open: true,
    proxy: {
        "/api": "http://localhost:5000"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./www/index.html",
      filename: "./index.html"
    })
  ],
  watch: true
}
