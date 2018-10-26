// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  devServer: {
    // open: true, //自trademanage动打开浏览器，不需要可以去掉
    proxy: {
      //接口代理
      '/api/*': {
        target: 'http://10.200.8.120:5000',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
