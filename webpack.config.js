var webpack = require('webpack')
var path = require('path')

module.exports = {
  sourceMap: 'eval',

  entry: './app/client/client.js',

  output: {
    path: path.join(__dirname, './public'),
    filename: 'client.min.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
};
