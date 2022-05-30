const path = require( 'path' );

module.exports = {
	entry: [
		'./assets/css/main.scss',
		'./assets/js/main.js',
	],
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: '[name].bundle.js',
	},
	// devtool: 'source-map',
	mode: 'production',
	watch: true,
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'main.css',
						},
					},
					{ loader: 'extract-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									require( 'autoprefixer' )
								]
							},
						}
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require( 'sass' ),
							webpackImporter: false, // See https://github.com/webpack-contrib/sass-loader/issues/804
							sassOptions: {
								includePaths: [ 'node_modules' ],
							},
						},
					}
				]
			},
		]
	},
};