var webpack = require("webpack"),
	HtmlWebPackPlugin = require("html-webpack-plugin"),
	commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
		name:"commons",
		filename:"common.js"
	}),
	path = require("path"),
	ExtractTextPlugin = require("extract-text-webpack-plugin");

var srcPath = path.join(__dirname,"src");

module.exports = {
	entry: {
		p1: [
		'webpack-dev-server/client?http://localhost:8080/',
    	'webpack/hot/only-dev-server',
		srcPath + "/js/main.jsx"
		] 
	},
	output:{
		publicPath:"http://localhost:8080/build/",
		path:"./build" ,
		filename:"./[name].bundle.js"
	},
	module:{
		loaders:[
			{ test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
			{ test: /\.css$/, loader: "style-loader!css-loader"},
			{ test: /\.sass$/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"},
			// Below code used for extract css out
			// { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
			{ test:/\.(png|jpg|ttf|eot|svg|woff(2)?)$/, loader: "url-loader?limit=8192"},
            { test: /\.js$/, loader: 'babel-loader',query: {
                  presets: 'es2015',
                },
                exclude:/node_modules/
            },
            { test:/\.jsx?$/, loader: "react-hot-loader!babel-loader?presets[]=react,presets[]=es2015",
            	exclude: /(node_modules|bower_components)/,
        	}
		]
	},
	resolve:{
		root: [process.cwd() + '', process.cwd() + '/node_modules'],
		extensions: ["",".js",".jsx"]
	},
	plugins:[
		commonsPlugin,
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebPackPlugin({
			inject:true,
			title:"My App",
			filename:"index.html",
			template: srcPath + "/template/my-app.html",
			hash:true,
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
		})
	],
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		progress:true,
	}
}