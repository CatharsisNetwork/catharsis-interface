/// <reference path="../../types/config.d.ts" />
import * as webpack from 'webpack';
import { EnvName, getConfig } from './config';

export default (
	envWebpack: webpack.Configuration,
	envName: EnvName,
	override?: (config: IConfig) => IConfig
): webpack.DefinePlugin => {
	let config = getConfig(envName);
	if (override) {
		config = override(config);
	}
	return new webpack.DefinePlugin({
		CONFIG: JSON.stringify(config),
		BRANCH: JSON.stringify(process.env.BRANCH || 'undefined'),
		COMMIT: JSON.stringify(
			process.env.COMMIT ? process.env.COMMIT.substring(0, 7) : 'undefined'
		),
	});
};
