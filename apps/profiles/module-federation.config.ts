import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
	name: 'profiles',

	exposes: {
		'./Module': './src/remote-entry.ts',
	},
};

export default config;
