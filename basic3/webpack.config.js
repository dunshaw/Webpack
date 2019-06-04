const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 基本配置
module.exports = {
  entry:'./input.js',    //当前入口文件
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'test.good.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'SERVICE_URL': JSON.stringify('https://www.baidu222.com')
    }),
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Good Morning SC',
      filename: 'index.html',
      template: 'template.html'
    }),

  ],
  module:{
    rules:[
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options:{
              limit:20000
            }
          }
        ]
      },
      {
        test: /\.(m?js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            // fallback to style-loader in development
             MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
      },
    ]
  },
  mode:'development'
};
