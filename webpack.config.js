const path = require('path');
const glob = require('glob-all');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = {
  entry: {
    main: './assets/js/main.js'
  },
  output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'images/[name][ext][query]'
	},
  mode: 'production',
  watch: true,
  module: {
    rules: [
		{
			test: /\.(sa|sc|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader'
			],
		},
		{
			test: /\.(jpe?g|png|gif|svg)$/i,
			type: "asset/resource"
		}			
	],
  },
  plugins: [
    new MiniCssExtractPlugin({
		filename: '[name].min.css',
      	chunkFilename: "[id].css"		
	}),
	new CleanWebpackPlugin(),
  ],
}
