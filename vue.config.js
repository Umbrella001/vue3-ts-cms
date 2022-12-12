// const path = require('path')

// const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/component'
      },
      extensions: ['.js', '.ts', '.cjs', '.json', '.vue']
    }
  }
  // 链式方式
  // chainWebpack: (config) =>{
  //   config.resolve.alias.set('@', resolve('src')).set('components', resolve('@/component'))
  // }
}
