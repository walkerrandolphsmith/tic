var path = require('path');
var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',
  watch: true,
  entry: {
    'index.ios': ['./src/main.ios.js'],
    'index.android': ['./src/main.android.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query: {
          stage: 0,
          optional: 'runtime'
        }
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, './common'),
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules'),
    ],
    extensions: ['', '.js', '.jsx', '.es6']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
};
