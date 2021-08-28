export type EnvName = 'dev' | 'prod' | 'local';
export const getConfig = (envName: EnvName): IConfig => {
	switch (envName) {
		case 'local':
			return require('../../config/local.json');
		case 'dev':
			return require('../../config/dev.json');
		case 'prod':
			return require('../../config/prod.json');
	}
};
