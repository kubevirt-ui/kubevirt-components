/* eslint-disable @typescript-eslint/no-var-requires */
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), postcss(), typescript({ tsconfig: './tsconfig.json' })],
    external: ['react', 'react-dom', /\.(css|less|scss)$/],
  },
  {
    input: 'dist/esm/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: ['react', 'react-dom', /\.(css|less|scss)$/],
  },
];
