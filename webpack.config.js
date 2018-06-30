const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// import autoprefixer from 'autoprefixer';

module.exports = {
  entry: './www/src/index.js',
  output: {
    path: path.join(__dirname, '/www/dist'),
    filename: "bundle.js"
  },
  devServer: {
    // Default port is 8080; doesn't need to be declared
    // port: 3000,
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
