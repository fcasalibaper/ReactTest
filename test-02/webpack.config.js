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
      }
		]
	}
};