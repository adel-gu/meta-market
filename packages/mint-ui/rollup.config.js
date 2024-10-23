const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');

const entry = "./src/index.ts"
const outDir = "./dist"

module.exports = withNx(
  {
    main: entry,
    outputPath: outDir,
    tsConfig: './tsconfig.lib.json',
    compiler: 'tsc',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    format: ['esm'],
    assets: [{ input: '.', output: '.', glob: 'README.md' }],
    project: "./package.json",
    extractCss: "base.css",
    sourceMap: true,
    deleteOutputPath: true,
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    plugins: [
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000, // 10kB
      }),
    ],
  }
);
