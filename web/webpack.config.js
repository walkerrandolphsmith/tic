module.exports = {
  entry: {
    main: './src/main.js'
  },

  output: {
    path: './app/',
    filename: "[name].js",
  },
  module: {
    loaders: [
      { test: /\.js$/,    loader: "babel-loader" },
    ]
  },
};
