module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  lintOnSave: true,
  chainWebpack: () => {},
  configureWebpack: () => {},
  productionSourceMap: true,
  css: {
   extract: true,
   sourceMap: false,
   loaderOptions: {
     stylus: {
       'resolve url': true,
       'import': [
         './src/theme'
       ]
     }
   },
   modules: false
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
   open: true, 
   host: '0.0.0.0',
   port: 9000,
   https: false,
   hotOnly: false,
   
   proxy: {
    '/api': {
      target: 'http://localhost:8000',
      ws: true,
      changeOrigin: true
    }
   },
   before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
 }
