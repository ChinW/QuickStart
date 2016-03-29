var webpack = require("webpack"),
	HtmlWebPackPlugin = require("html-webpack-plugin"),
	commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
		name:"commons",
		filename:"common.js"
	}),
	path = require("path"),
	ExtractTextPlugin = require("extract-text-webpack-plugin");

var srcPath = path.join(__dirname, "src");
var __DEV__ = process.env.NODE_ENV !== "production"; //Development Symbolic
var __APP_TITLE__ = "My APP";
var outputPublicPath = "http://localhost:8081/build/";
var indexEntry = [srcPath + "/js/index.jsx"];

if(__DEV__){
	indexEntry = [
			'webpack-dev-server/client?http://localhost:8081/',
	    	'webpack/hot/only-dev-server',
			srcPath + "/js/index.jsx"
		]
}else{
	outputPublicPath = "./";
}

module.exports = {
	entry: {
		index: indexEntry
	},
	output:{
		publicPath: outputPublicPath,
		path: "./build",
		filename: "./[name].bundle.js",
		sourceMapFilename: "[file].map"
	},
	module:{
		loaders:[
			{ test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
			{ test: /\.css$/, loader: "style-loader!css-loader"},
			{ test: /\.sass$/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"},
			// Below code used for extract css out
			// { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
			{ test: /\.(png|jpg|ttf|eot|svg|woff(2)?)$/, loader: "url-loader?limit=8192"},// inline base64 URLs for <=8k images
            { test: /\.js$/, loader: 'babel-loader',query: {
                  presets: 'es2015',
                },
                exclude:/node_modules/
            },
            { test: /\.jsx?$/, loader: "react-hot-loader!babel-loader?presets[]=react,presets[]=es2015",
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
			inject: true,
			title: __APP_TITLE__,
			filename: "index.html",
			template: srcPath + "/template/my-app.html",
			hash:true,
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
		}),
		new webpack.DefinePlugin({
			"process.enb": {
				ENV: JSON.stringify("production")
			},
		})
	],
	devServer:{
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
	}
}