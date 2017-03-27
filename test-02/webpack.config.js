module.exports = {
	entry: './app.js',
	output: {
		//path: 'build',
		filename: './bundle.js'
	},

	module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/        
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
                sourceMap: true,
                importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                	require("postcss-import")({ addDependencyTo: webpack }),
                  require('precss'),
                  require('autoprefixer'),
                  require('postcss-extend'),
									require('postcss-mixins'),
									require('postcss-nested'),
									require('postcss-simple-vars'),
									require('postcss-cssnext')
                ];
              }
            }
          }
        ]
      }
		]
	}
};