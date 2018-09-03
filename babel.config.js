module.exports = {
  presets: [
    '@vue/app'
  ],
  env: {
    test: {
      presets: [['@vue/app', { targets: { node: 'current' } }]]
    }
  },
  plugins: [
    'babel-plugin-transform-class-properties',
    'babel-plugin-syntax-flow',
    'babel-plugin-transform-flow-strip-types'
  ]
}
