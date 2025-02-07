// import babel polyfill
require('@babel/polyfill');

// import libraries to help configure the webpack config
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = (env, argv) => {
  // check if we are in development mode or not
  const dev = argv.mode === 'development';

  return ({
    // set the mode of our project
    mode: argv.mode,

    // your main js file
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src/scripts/app.js')],

    // define the output
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: 'bundle.min.js',
    },

    // define the different modules
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            dev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'images/[name].[hash:7].[ext]',
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'fonts/[name].[hash:7].[ext]',
          },
        },
        {
          test: /\.(webm|mp4)$/,
          loader: 'file-loader',
          options: {
            name: 'videos/[name].[hash:7].[ext]',
          },
        },
        {
          test: /\.(glb)$/,
          loader: 'file-loader',
          options: {
            name: '3d-models/[name].[hash:7].[ext]',
          },
        },
        {
          test: /\.(pdf)$/,
          loader: 'file-loader',
          options: {
            name: 'documenten/[name].[hash:7].[ext]',
          },
        },
      ],
    },

    // define the plugins
    plugins: [
      new CopyPlugin([
        {
          from: './src/templates',
          to: 'templates',
        },
        {
          from: './src/images',
          to: 'images',
        },
        {
          from: './src/fonts',
          to: 'fonts',
        },
        {
          from: './src/icons',
          to: 'icons',
        },
        {
          from: './src/videos',
          to: 'videos',
        },
        {
          from: './src/3d-models',
          to: '3d-models',
        },
        {
          from: './src/documenten',
          to: 'documenten',
        },
      ]),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: dev ? '[name].css' : '[name].[hash].css',
        chunkFilename: dev ? '[id].css' : '[id].[hash].css',
      }),
      new CleanWebpackPlugin(),
      new ProgressBarPlugin({
        format: `  build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
        clear: false,
      }),
    ],

    // define our development server
    devServer: {
      port: process.env.PORT || 8080,
      contentBase: './src',
      historyApiFallback: false,
    },
  });
};
