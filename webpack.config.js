let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let ImageminWebpackPlugin = require('imagemin-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
	mode: process.env.NODE_ENV || 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		/*publicPath: 'dist/'*/
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\. js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/, 
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								url: true
							}
						},
						'postcss-loader',
						'sass-loader'
					]
				})
				
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(png|jpe?g|svg)$/, 
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img/',
							publicPath: 'img/'
						}
					}
				]
				
			},
			{
				test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
			}
		],
	},
	plugins: [
		new ExtractTextPlugin('app.css'),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};

module.exports = (env, options) => {
	
	if(options.mode === 'production'){
		conf.mode = 'production';
		conf.plugins.push(new webpack.LoaderOptionsPlugin({
			minimize: true
		}));
		conf.plugins.push(new UglifyJsPlugin({
			sourceMap: true
		}));
	}

	return conf;
}
