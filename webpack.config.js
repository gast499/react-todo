let path = require('path');
let LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: './client/index.js',
	output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  }
};