import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'landing',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
