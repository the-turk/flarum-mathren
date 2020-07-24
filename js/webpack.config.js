/**
 * Copy necessary files and directories
 *
 * @see https://github.com/webpack-contrib/copy-webpack-plugin
 */

const flarumConfig = require('flarum-webpack-config');
const CopyPlugin = require('copy-webpack-plugin');

let config = flarumConfig();

config.plugins = config.plugins || [];

config.plugins.push(new CopyPlugin([{
  from: 'node_modules/katex',
  to: '../../assets/katex'
}, ]));

module.exports = config;
