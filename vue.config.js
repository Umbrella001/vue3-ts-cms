const path = require('path')
const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        components: resolve('src/component')
      },
      extensions: ['.js', '.ts', '.cjs', '.json', '.vue']
    }
  }
  // 链式方式
  // chainWebpack: (config) =>{
  //   config.resolve.alias.set('@', resolve('src')).set('components', resolve('@/component'))
  // }
}
