import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
	name: 'market',

	exposes: {
		'./Module': './src/remote-entry.ts',
	},
};

export default config;
