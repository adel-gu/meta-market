import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
	name: 'auth',

	exposes: {
		'./Module': './src/remote-entry.ts',
	},
};

export default config;
