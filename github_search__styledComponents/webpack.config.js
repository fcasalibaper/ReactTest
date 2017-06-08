var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var cssnano = require('cssnano');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].bundle.js'
	},

	module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options:{
          presets: [
            ['es2015',{ "modules": false }],
            ['react']
          ],
        }
      },
      {
        test: /\.css$/,
				use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader:'css-loader'
            },
            {
              loader:'postcss-loader'
            }
          ]
        })
      }
		]
	},
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    compress: true,
    hot: false,
    open:true,
    stats: "errors-only",
    port: 2323
  },
	plugins: [
		new HtmlWebpackPlugin({
      title: 'Todo list',
      minify : {
        collapseWhitespace:false
      },
      filename:'./index.html',
      template: './src/index.html',
      hash:true
    }),

		// CSS
    new ExtractTextPlugin({
        filename: '[name]/[name].bundle.css'
    })


	]
};
