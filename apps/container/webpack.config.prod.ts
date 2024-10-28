import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import { ModuleFederationConfig } from '@nx/webpack';

import baseConfig from './module-federation.config';

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig: ModuleFederationConfig = {
	...baseConfig,
	remotes: [
		// ['auth', `${domain}/auth/latest/remoteEntry.js`],
		// ['landing', `${domain}/landing/latest/remoteEntry.js`],
		// ['market', `${domain}/market/latest/remoteEntry.js`],
		// ['profiles', `${domain}/profiles/latest/remoteEntry.js`],
	],
};

// Nx plugins for webpack to build config object from Nx options and context.
/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default composePlugins(
	withNx(),
	withReact(),
	withModuleFederation(prodConfig, { dts: false }),
	(config) => {
    config.output = {
      ...config.output,
      publicPath: "/container/latest/",
    };
    return config;
  }
);