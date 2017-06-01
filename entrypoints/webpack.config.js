var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var cssnano = require('cssnano');

var entries = {
  home: ['./src/home/index.js'],
  vitrinas: ['./src/vitrinas/index.js'],
  samsungs8: ['./src/samsungs8/index.js']
}

module.exports = {
  // context: __dirname,
  entry: entries,
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: './dist/',
    filename: '[name]/[name].bundle.js'
  },

	module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
				// include: path.join(__dirname, "src"),
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
              loader:'postcss-loader',
              options:{
                plugins:function(){
                  return [
                    require("postcss-import")(),
                    require("postcss-url")(),
                    require("postcss-mixins")(),
                    require("postcss-extend")(),
                    require("postcss-nested")(),
                    require("postcss-simple-vars")(),
                    require("postcss-cssnext")(),
                    require('cssnano')()
                  ]
                }
              }
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
    // HOME
    new HtmlWebpackPlugin({
      title: 'home',
      minify : {
        collapseWhitespace:false
      },
      filename:'./home/index.html',
      template: './src/home/index.html',
      hash:true,
      chunks: ['home']
    }),

    // VITRINAS
    new HtmlWebpackPlugin({
      title: 'vitrinas',
      minify : {
        collapseWhitespace:false
      },
      filename:'./vitrinas/index.html',
      template: './src/vitrinas/index.html',
      hash:true,
      chunks: ['vitrinas']
    }),

    // SAMSUNG S8
    new HtmlWebpackPlugin({
      title: 'samsungs8',
      minify : {
        collapseWhitespace:false
      },
      filename:'./samsungs8/index.html',
      template: './src/samsungs8/index.html',
      hash:true,
      chunks: ['samsungs8']
    }),

    // CSS
    new ExtractTextPlugin({
        filename: '[name]/[name].bundle.css'
    })


  ]
};
