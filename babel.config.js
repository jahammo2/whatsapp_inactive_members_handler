module.exports = function(api) {
  var validEnv = ['development', 'test', 'staging', 'production']
  var currentEnv = api.env()
  var isDevelopmentEnv = api.env('development')
  var isProductionEnv = api.env('production') || api.env('staging')
  var isTestEnv = api.env('test')

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      'Please specify a valid `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", "staging", and "production". Instead, received: ' +
        JSON.stringify(currentEnv) +
        '.'
    )
  }

  let presets = [
    require('@babel/preset-env').default,
    [
      require('@babel/preset-react').default,
      {
        development: isDevelopmentEnv || isTestEnv,
      }
    ],
  ].filter(Boolean);

  let plugins = [
    require('babel-plugin-jsx-control-statements'),
    isProductionEnv && [
      require('babel-plugin-transform-react-remove-prop-types').default,
      {
        removeImport: true
      }
    ],
  ].filter(Boolean)

  return {
    plugins,
    presets,
  }
}
