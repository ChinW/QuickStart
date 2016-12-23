var webpack = require("webpack"),
	HtmlWebPackPlugin = require("html-webpack-plugin"),
	commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
		name: "common",
		filename: "common.js"
	}),
	path = require("path"),
	srcPath = path.join(__dirname, "src"),
    projectName = 'My APP',
    outputPublicPath = './',
    indexEntry = [srcPath + "/scripts/index.jsx"];

if(process.env.NODE_ENV !== "production"){
    indexEntry = [
        'webpack-dev-server/client?http://localhost:8081/',
        'webpack/hot/only-dev-server',
        srcPath + "/js/index.jsx"
    ];
    outputPublicPath = "http://localhost:8081/build/";
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
			{ test: /\.(scss|sass)$/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"},
			// Below code used for extract css out
			// { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
			// inline base64 URLs for <=8k images
			{ test: /\.(png|jpg|ttf|eot|svg|woff(2)?)$/, loader: "url-loader?limit=8192"},
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
		root: [process.cwd(), process.cwd() + '/node_modules'],
		extensions: ["", ".js", ".jsx"]
	},
	plugins:[
		commonsPlugin,
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebPackPlugin({
			inject: true,
			title: projectName,
			filename: "index.html",
			template: srcPath + "/template/index.html",
			hash: true,
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
		}),
		new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
			"process.env.APP": {
                projectName: JSON.stringify(projectName),
			},
		})
	],
	devServer:{
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
	}
};