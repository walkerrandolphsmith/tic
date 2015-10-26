var path = require('path');

module.exports = {
  entry: {
    main: './src/main.js'
  },

  output: {
    path: './app/',
    filename: "[name].js",
  },
  resolve: {
    root: [
      path.resolve(__dirname, './common'),
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules'),
    ],
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {stage: 0} },
    ]
  },
};
