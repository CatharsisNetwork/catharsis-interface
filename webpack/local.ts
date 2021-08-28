import * as webpack from 'webpack';
import defaultConfiguration from './default';
import declare from './utils/declare';
import merge from "webpack-merge";

export default (env: webpack.Configuration): webpack.Configuration =>
	merge(defaultConfiguration(env), {
		plugins: [
			declare(env, 'local', (config) => ({
				...config,
				development: true,
			})),
		],
		optimization: {
			moduleIds: 'named',
		},
		devServer: {
			inline: true,
			compress: true,
			disableHostCheck: true,
			port: 3000,
			open: true,
			host: 'localhost',
			publicPath: '/',
			historyApiFallback: true,

		},
	});
