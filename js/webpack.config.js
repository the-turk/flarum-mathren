// copy necessary files and directories with webpack
// more info on https://github.com/webpack-contrib/copy-webpack-plugin

const flarumConfig = require('flarum-webpack-config');
const CopyPlugin = require('copy-webpack-plugin');

let config = flarumConfig();

config.plugins = config.plugins || [];

config.plugins.push(new CopyPlugin([
	{ 
		from: 'node_modules/katex/dist/contrib/auto-render.min.js', 
		to: 'auto-render.min.js' 
	},
	{ 
		from: 'node_modules/katex/dist/katex.min.css', 
		to: '../../assets/katex.min.css'
	},
	{ 
		from: 'node_modules/katex/dist/fonts', 
		to: '../../assets/fonts'
	},
]));

module.exports = config;