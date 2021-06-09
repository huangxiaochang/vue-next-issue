module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-next-issue/'
    : '/',
  chainWebpack: config => {
    config.optimization.minimize(false)
    config.optimization.minimizer = []
  },
}
