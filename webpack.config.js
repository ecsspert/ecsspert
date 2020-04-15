const path = require('path');

module.exports = {
  entry: {
    'index': './src/scripts/index.js',
    'ga-lite': './src/scripts/ga-lite.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: '[name].min.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
