const path = require('path');
const { cleanWebpack, definePlugin, htmlWebpack, miniCssExtract, miniCssExtractPlugin } = require('./webpack.plugins');

const isDevMode = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: {
		bundle: ['@babel/polyfill', path.join(__dirname, '..', 'src', 'index.jsx')],
		styleGlobals: path.join(__dirname, '..', 'src/assets/scss/globals.scss'),
	},
	output: {
		path: path.join(__dirname, '..', 'dist'),
		filename: '[name].js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.jsx', '.js', '.ts', '.tsx'],
		alias: {
			pages: path.resolve(__dirname, '..', 'src/pages/'),
			placeholders: path.resolve(__dirname, '..', 'src/placeholders/'),
			components: path.resolve(__dirname, '..', 'src/components/'),
			modules: path.resolve(__dirname, '../src/store/modules'),
			utils: path.resolve(__dirname, '../src/utils'),
		},
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg|gif)$/,
				use: {
					loader: 'file-loader',
				},
			},
			{
				test: /\.(scss|css)$/,
				use: [
					isDevMode ? 'style-loader' : miniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        },
			},
		],
	},
	plugins: [htmlWebpack, cleanWebpack, definePlugin, miniCssExtract],
};
