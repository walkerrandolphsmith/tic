'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('./webpack.config');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var _ = require('lodash');
var promise = require('bluebird');

gulp.task('dev', [], function () {
	pack(true)
		.then(function (packingBundle) {
			packingBundle.config.plugins = _.reject(packingBundle.config.plugins, function (plugin) {
				return plugin instanceof HtmlWebpackPlugin;
			});
			var compiler = webpack(packingBundle.config);
			new WebpackDevServer(compiler, {
					hot: true,
					contentBase: path.join(__dirname, './', packingBundle.config.output.contentBase),
					stats: { colors: true }
				})
				.listen(3000, 'localhost', function (error) {
					if (error) throw new gutil.PluginError('webpack-dev-server', error);
					gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/index.html)');
				});
		});
});

gulp.task('default', [ 'dev' ]);


function pack(isDevelopment) {
	if (isDevelopment) {
		config.debug = true;
		config.devtool = 'eval';
	}
	return new promise(function (resolve, reject) {
		var compiler = webpack(config, function (error, stats) {
			if (error) {
				reject(error);
			}
			resolve({
				config: config,
				compiler: compiler,
				stats: stats
			});
		});
	});
};
