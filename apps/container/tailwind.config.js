// const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
// const { join } = require('path');
// const baseConfig = require('../../tailwind.config.base.js');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	// presets: [baseConfig],
// 	content: [
// 		join(
// 			__dirname,
// 			'{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
// 		),
// 		...createGlobPatternsForDependencies(__dirname),
// 	],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };
// eslint-disable-next-line @nx/enforce-module-boundaries
import { buildConfig } from '../../packages/mint-ui/tailwind.config';

export default buildConfig(__dirname);
