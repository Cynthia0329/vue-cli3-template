// 配置参考：https://cli.vuejs.org/zh/config/
const webpack = require('webpack')

const Timestamp = new Date().getTime() // 时间戳
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin  // 打包分析插件
const CompressionWebpackPlugin = require("compression-webpack-plugin") // gzip压缩插件

const IS_PROD = ['prod', 'test'].includes(process.env.NODE_ENV)

// 解析文件路径
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

// 根据环境不同生成不同的打包名字
function distName(arg) {
  switch (arg) {
    case 'dev':
      return 'dist'
      break;
    case 'test':
      return 'dist-test'
      break;
    case 'prod':
      return 'dist-prod'
      break;
  }
}
// const distName = process.env.NODE_ENV === "test" ? 'dist-test' : 'dist-prod'

module.exports = {
  publicPath: './', // 基本路径
  outputDir: distName(process.env.NODE_ENV),
  // outputDir: process.env.NODE_ENV === "test" ? 'dist-test' : 'dist-prod', // 输出文件目录：不同的环境打不同包名
  assetsDir: 'static',              // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  lintOnSave: true,                 // 在保存时校验格式
  productionSourceMap: false,       // 生产环境是否生成 SourceMap
  transpileDependencies: ['webpack-dev-server/client','vue-echarts','resize-detector'],   // 兼容ie：需要编译的依赖包名
  devServer: {
    open: false, // 启动服务后是否打开浏览器
    host: '0.0.0.0', // host设置成0.0.0.0，允许内网访问
    port: 8080, // 服务端口
    https: false,
    hotOnly: false,
    proxy: null,
    before: app => {}
  },
  css: {
    // 是否使用css分离插件:提取css代码到单独的css文件
    extract: IS_PROD,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      //设置css中引用文件的路径，引入通用使用的scss文件
      sass: {
        data: `@import "@/styles/index.scss";`
      }
    },
    modules: false,
  },
  chainWebpack: config => {
    // 修复热更新失效（保险设置）
    config.resolve.symlinks(true) 
    // 自定义alias名称
    config.resolve.alias
    .set('@', resolve('src'))
    .set('img', resolve('src/assets/img'))

    // js输出配置
    if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'test') {
      const filename = `static/js/[name]-${process.env.VUE_APP_VERSION}-${Timestamp}.js` // name+版本号+时间戳控制缓存
      config.output.filename(filename).chunkFilename(filename)
    }

    // 图片输出配置
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('file-loader')
      .options({
        name: 'static/img/[name].[hash:8].[ext]'
      })
    config.module.rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'static/img/[name].[hash:8].[ext]'
      })
    
    // 打包分析插件
    if (process.env.NODE_ENV === 'prod') {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
    }

    // 压缩js
    config.optimization.minimize(true)
    // 分割代码：分成多个进行加载，可以达到最快化
    config.optimization.splitChunks({
      chunks: 'all'
    })
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'test' || (process.env.NODE_ENV === 'prod')) {
      // 识别出具有重复模块的 chunk，并优先进行合并
      config.plugins.push(  
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 5
        })
      )
      // 开启gzip压缩
      config.plugins.push(  
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, //匹配文件名
          threshold: 10240, //对超过10k的数据压缩
          deleteOriginalAssets: false, //删除原文件
          minRatio: 0.8,   // 只有压缩率小于这个值的资源才会被处理
        })
      )
    }
  }
}