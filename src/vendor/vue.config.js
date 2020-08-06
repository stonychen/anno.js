module.exports = {
  productionSourceMap: false,

  chainWebpack: (config) => {
    config
      .entry('app')
      .clear()
      .add('vue-router')
      .add('axios')
      .add('vue-property-decorator')
      .add('moment')
      .add('tslib')
      .add('async-validator')
      .add('core-js/features/string')
      .add('core-js/features/number')
      .add('core-js/features/promise')
      .end()
    config.optimization.splitChunks({}).end()
  },
}
