module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/safeBluesDashboard/'
  : '/',
    transpileDependencies: ["vuetify"]
}
