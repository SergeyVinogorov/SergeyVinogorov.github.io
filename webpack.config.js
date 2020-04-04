const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var commonConfig = {
	output: {
		filename: 'vue-preview.min.js',
		libraryTarget: 'window',
		library: 'VuePreview'
	},
	module: {
		loaders: [...]
	},
	externals: { ...},
	plugins: { ...}
}

module.exports = [

	// browser based implementation
	merge(config, {
		entry: path.resolve(__dirname + '/../src/index.js'),
		output: {
			filename: 'vue-preview.min.js'
		}
	}),

	// for the node based implementation
	merge(commonConfig, {

	})
]