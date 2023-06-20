import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-import-css';
import svgr from '@svgr/rollup';

const packageJson = require('./package.json');

const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      interop: 'compat',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      interop: 'compat',
    },
  ],
  plugins: [
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: [/__mocks__/, /\.stories\.tsx?/, /\.test\.tsx?/],
    }),
    commonjs(),
    css(),
    svgr(),
  ],
  external,
};
