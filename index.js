try {
  // cjs module `dist` for rollup bundle
  const index = require('./dist')
  module.exports = index
} catch {
  // ts module `src` for dev
  if (!require.extensions['.ts']) {
    require('ts-node').register({
      project: require('path').join(__dirname, 'tsconfig.json'),
      compilerOptions: {
        module: 'commonjs',
      },
    })
  }
  const index = require('./src')
  module.exports = index
}
