var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

// ENTRY POINTS
var entrys = {
	home 			: './src/home/index.js',
	vitrinas 	: './src/vitrinas/index.js'
}

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: './src/home/index.js',
	output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

	module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options : {
              modules :false
              //importLoaders: 2
            }
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
                  require("postcss-cssnext")({
                    compress: true
                  })
                ]
              }
            }
          }
        ]
      }
		]
	},

	// SERVER
	devServer : {
		contentBase: path.resolve(__dirname, './src'),
		port:2332,
		compress: true,
		stats: 'errors-only',
		open: true
	},

	// PLUGINS
	plugins: [

		// HOME
		new HtmlWebpackPlugin({
      title: 'Home',
			chunks: ['home'],
			filenmae: './home/index.html',
      template: './home/index.html'
    }),

		// VITRINAS
		new HtmlWebpackPlugin({
      title: 'Vitrinas',
			chunks: ['vitrinas'],
			filenmae: './vitrinas/index.html',
      template: './vitrinas/index.html'
    })
	]
};
