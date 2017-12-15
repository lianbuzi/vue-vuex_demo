'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const ExtractPlugin = require('extract-text-webpack-plugin');
const webpack= require('webpack');
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader:'style-loader!css-loader!stylus-loader!sass-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test:/\.(scss|css)$/,
        include: [
          '/src/css',//表示在src目录下的css需要编译
          '/node_modules/swiper/dist/css'   //增加此项
        ],
         // use: ['style-loader', 'css-loader', 'sass-loader']
         loader:'style-loader!css-loader!stylus-loader!sass-loader',
      },
      // {
      //   test: /\.(scss|sass|css)$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         sourceMap: 'inline'
      //       }
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         outputStyle: 'expanded',
      //         sourceMap: true,
      //         sourceMapContents: true
      //       }
      //     }
      //   ]
      // },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader:
          'url-loader',
        options:
          {
            limit: 10000,
            name:
              utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    })
  ]
};
