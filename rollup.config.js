import builtins from 'builtin-modules'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import typescript from 'rollup-plugin-typescript'
import copy from 'rollup-plugin-copy'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import packageJson from './package.json'


export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  watch: {
    include: 'src',
  },
  external: [
    ...builtins,
    ...Object.keys(packageJson.dependencies),
  ],
  treeshake: {
    moduleSideEffects: false,
  },
  plugins: [
    progress(),
    copy({
      targets: [
        { src: 'src/*.sh', dest: 'dist/' },
      ]
    }),
    resolve(),
    json(),
    typescript(),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false,
    }),
    strip({
      include: [
        '**/*.js',
        '**/*.ts',
      ],
      functions: [
      ],
    }),
    filesize(),
  ],
}
