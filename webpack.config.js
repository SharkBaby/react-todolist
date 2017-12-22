require('babel-polyfill');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')


const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH,'src');
const BUILD_PATH = path.resolve(ROOT_PATH,'dist');
const TEMPLATE_FILE = path.resolve(APP_PATH,'Template.html');
const APP_FILE = path.resolve(APP_PATH,'app.jsx');


module.exports = {
    entry:  ['babel-polyfill',APP_FILE],
    output: {
      path: BUILD_PATH,
      filename: "bundle.js"
    },
    module: {
    rules: [
        {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
            },
            include: [APP_PATH],
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            }),
            include: [APP_PATH],
            exclude: /^node_modules$/,
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use:[
                {loader:'url-loader?limit=8192&name=Images/[hash:8].[name].[ext]'},
                {loader:'img-loader'}
            ],
            include: [APP_PATH],
            exclude: /^node_modules$/,
        },
        {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|xlsx)(\?|$)/,
            use:{
                loader:'file-loader?name=[name].[ext]'},
            include: [APP_PATH],
            exclude: /^node_modules$/,
        }
    ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: TEMPLATE_FILE,
            hash:true,
            inject:false,
            files: {
                css:['client.css'],
                js:['common.bundle.js', 'client.js']
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: 'common.bundle.js' }),
        new ExtractTextPlugin('client.css'),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    resolve: {
        extensions: ['.web.js', '.js', '.jsx', '.less', '.scss', '.css'], 
      },
  }