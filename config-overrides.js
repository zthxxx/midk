const {
  override,
  useEslintRc,
  addWebpackModuleRule,
} = require('customize-cra')


// https://github.com/arackaf/customize-cra/blob/master/api.md
module.exports = override(
  useEslintRc(),
  addWebpackModuleRule({
    test: /\.ya?ml$/,
    loaders: [
      'json-loader',
      'yaml-loader',
    ],
  }),
)
