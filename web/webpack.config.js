var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
		contentBase: 'dist',
    filename: "[name].js",
  },
  plugins: [
		new ExtractTextPlugin('styles.css')
	],
  resolve: {
    root: [
      path.resolve(__dirname, './common'),
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules'),
    ],
    extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['web_modules', 'node_modules', 'Components']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {stage: 0} },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('css?sourceMap!autoprefixer!less?sourceMap') },
    ]
  },
};
