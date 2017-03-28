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
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options : {
              modules :false,
              importLoaders: 2
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
	}
};