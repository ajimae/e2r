const { config } = require('dotenv');

// importing webpack dependencies
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const getFaviconUrl = () => {
  return `https://webstockreview.net/images/earth-vector-png-10.png`;
}

// instantiating webpack dependencies
const cleanWebpack = new CleanWebpackPlugin();
const htmlWebpack = new htmlWebpackPlugin({
  template: 'src/index.html',
  title: 'ProductName',
  getFaviconUrl,
  inject: true,
  hash: true,
});

const namedModulesPlugin = new webpack.NamedModulesPlugin();
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const miniCssExtract = new miniCssExtractPlugin();

// stringify env variables
const envs = config().parsed;
const stringifiedEnvs = {};
Object.keys(envs).forEach(envKey => {
  stringifiedEnvs[envKey] = JSON.stringify(envs[envKey]);
});

const definePlugin = new webpack.DefinePlugin({
  'process.env': stringifiedEnvs
});

module.exports = {
  cleanWebpack,
  htmlWebpack,
  namedModulesPlugin,
  hotModuleReplacementPlugin,
  miniCssExtract,
  miniCssExtractPlugin,
  definePlugin
};
