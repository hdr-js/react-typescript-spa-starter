// shared config (dev and prod)
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (mode) => ({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  entry: ['@babel/polyfill', resolve(__dirname, '../../src')],
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx', 'js', 'jsx'],
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets/images/favicon.ico', to: 'assets/images' }],
    }),
    new webpack.DefinePlugin({
      mode,
    }),
  ],
  output: {
    filename: 'assets/js/[name]_[hash].bundle.js',
    path: resolve(__dirname, '../../', 'build'),
    publicPath: '/',
  },
});
