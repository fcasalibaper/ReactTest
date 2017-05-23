var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var entries = {
  home: ['./src/home/index.js'],
  vitrinas: ['./src/vitrinas/index.js']
}

module.exports = {
  context: __dirname,
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

	module: {
    rules: [
      {
        test: /\.jsx|\.js$/,
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
				// include: path.join(__dirname, "src"),
        use:[
          { loader: "style-loader" },
          { loader: "css-loader",
            options : {
              modules:true,
              localIdentName: '[local]--[hash:base64:10]'
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
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    hot: false,
    open:true,
    stats: "errors-only",
    port: 2323
  },
  plugins: [
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
    new HtmlWebpackPlugin({
      title: 'vitrinas',
      minify : {
        collapseWhitespace:false
      },
      filename:'./vitrinas/index.html',
      template: './src/vitrinas/index.html',
      hash:true,
      chunks: ['vitrinas']
    })

    // Print more redable modules names in browser console
    // new webpack.NamedModulesPlugin()
  ]
};
