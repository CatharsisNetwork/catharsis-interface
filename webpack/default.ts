import { getLocalIdent as loaderGetLocalIdent } from 'css-loader/dist/utils';
import ErrorOverlayPlugin from 'error-overlay-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import pkg from '../package.json';



export const ROOT_DIR = path.resolve(__dirname, '..');
export const SRC_DIR = path.resolve(ROOT_DIR, 'src');
export const BUILD_DIR = path.resolve(ROOT_DIR, 'build');
export const ASSETS_DIR = path.resolve(SRC_DIR, 'assets');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const getLocalIdent = (loaderContext, localIdentName, localName, options) => {
	const { resourcePath } = loaderContext;
	if (resourcePath.includes('styles/vendors')) {
		return localName;
	}
	return loaderGetLocalIdent(loaderContext, localIdentName, localName, options);
};


// eslint-disable-next-line no-unused-vars
export default (env: webpack.Configuration): webpack.Configuration => ({
	context: ROOT_DIR,
	entry: path.resolve(SRC_DIR, 'index.tsx'),
	output: {
		path: BUILD_DIR,
		filename: 'assets/bundle.[contenthash:8].js',
		pathinfo: true,
		publicPath: '/',
		assetModuleFilename: 'assets/images/[name][contenthash:7][ext][query]',
		// assetModuleFilename: 'assets/images/[name]-[sha1:hash:7][ext]',
	},

	devtool: 'source-map',
	bail: true,
	performance: {
		hints: false,

	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.*'],
		alias: {
			assets: path.resolve(ROOT_DIR, 'src', 'assets'),
			components: path.resolve(ROOT_DIR, 'src', 'components'),
			utils: path.resolve(ROOT_DIR, 'src', 'utils'),
			types: path.resolve(ROOT_DIR, 'src', 'types'),
			'@': path.resolve(ROOT_DIR, 'src'),
			src: path.resolve(ROOT_DIR, 'src'),
		},
		plugins: [
			new TsconfigPathsPlugin({
				configFile: path.resolve(ROOT_DIR, 'tsconfig.json'),
			}),
		],
	},
	target: 'web',
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},

			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},

			// module style
			{
				test: /\.module\.(sc|sa|c)ss$/,
				// exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							// modules: true,
							modules: {
								// namedExport: true,
								// exportLocalsConvention: 'camelCaseOnly',
								// localIdentName: `[local]${process.platform === 'win32'
								// 		? 'win32--[hash:base64:5]'
								// 		: '--[hash:base64:5]'
								// 	}`,
								localIdentName: '[local]--[hash:base64:5]',
							},
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [ASSETS_DIR],
							},
							sourceMap: true,
							additionalData: `
								@import "~assets/styles/_vars.scss";
								@import "~assets/styles/_mixins.scss";
							`,
						},
					},
				],
			},
			{
				test: /\.(sc|sa|c)ss$/,
				exclude: /\.module\.(sc|sa|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [ASSETS_DIR],
							},
							sourceMap: true,
							additionalData: `
								@import "~assets/styles/_grid.scss";
							`,
						},
					},
				],
			},

			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext][query]'
				}
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 8 * 1024 // 8kb
					}
				},
				generator: {  //If emitting file, the file path is
					filename: 'fonts/[hash][ext][query]'
				}
			},
			// {
			// 	test: /\.(ttf|otf|eot|woff|woff2)$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				outputPath: 'assets/fonts',
			// 				name: '[name].[ext]',
			// 			},
			// 		},
			// 	],
			// },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Catharsis',
			template: path.join(ROOT_DIR, 'public/index.html'),
			inject: 'body',
			favicon: './public/favicon.ico',
		}),

		new MiniCssExtractPlugin({
			filename: 'assets/[name]-[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			VERSION: pkg.version,
		}),
		new ESLintPlugin({
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			fix: true,
			// failOnWarning: true,
		}),
		new ErrorOverlayPlugin(),
		// new CleanWebpackPlugin(),
	],
});
