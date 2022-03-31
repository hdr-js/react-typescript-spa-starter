// production config
const { merge } = require("webpack-merge");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const Visualizer = require('webpack-visualizer-plugin');

const commonConfig = require("./common");

module.exports = merge(commonConfig('production'), {
  mode: "production",

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  },
  plugins: [
    // new Visualizer({
    //   filename: './statistics.html'
    // }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name]_[hash].css',
    }),
    new OptimizeCssAssetsPlugin(),
  ],
  resolve: {
    alias: {
      moment: 'moment/min/moment.min.js',
    },
  },
});
