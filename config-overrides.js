const {
  override,
  addWebpackModuleRule,
} = require('customize-cra')


// https://github.com/arackaf/customize-cra/blob/master/api.md
module.exports = override(
  addWebpackModuleRule({
    test: /\.ya?ml$/,
    loaders: [
      'json-loader',
      'yaml-loader',
    ],
  }),
)
