import * as webpack from 'webpack';
import merge from 'webpack-merge';
import declare from './utils/declare';
import defaultConfiguration from './default';

export default (env: webpack.Configuration): webpack.Configuration =>
	merge(defaultConfiguration(env), {
		devtool: 'source-map',
		plugins: [
			declare(env, 'prod', (config) => ({
				...config,
				development: false,
			})),
		],
	});
