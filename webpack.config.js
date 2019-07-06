const path = require('path');
module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { 
        test: /\.js?$/, 
        loader: "babel-loader", 
        exclude: /node_modules/,
		resolve: {
			extensions: [".js", ".jsx"]
		},
		include: path.resolve("src")
      },
      { 
        test: /\.jsx?$/, 
        loader: "babel-loader", 
        exclude: /node_modules/,
		resolve: {
			extensions: [".js", ".jsx"]
		},		
		include: path.resolve("src") 
      },
      { 
        test: /\.css$/, 
        loader: ['style-loader','css-loader'], 
        exclude: /node_modules/,
		include: path.resolve("src")		
       },
	   {
		test:/\.scss$/,
		loader:['style-loader','css-loader','sass-loader'],
		exclude:/nodde_modules/,
		include: path.resolve("src")
	   }
    ]
  },
  
}
