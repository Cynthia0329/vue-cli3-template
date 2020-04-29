// 配置参考：https://cli.vuejs.org/zh/config/

const Timestamp = new Date().getTime() // 时间戳
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin  // 打包分析插件

// 解析文件路径
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './', // 基本路径
  outputDir: process.env.NODE_ENV === "test" ? 'dist-test' : 'dist-prod', // 输出文件目录：不同的环境打不同包名
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
    // css预设器配置项
    loaderOptions: {
      //设置css中引用文件的路径，引入通用使用的scss文件
      sass: {
        data: `@import "@/styles/index.scss";`
      }
    }
  },
  chainWebpack: config => {
    // 修复热更新失效（保险设置）
    config.resolve.symlinks(true) 
    // 自定义alias名称
    config.resolve.alias
    .set('@', resolve('src'))

    // js输出配置
    if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'test') {
      const filename = `static/js/[name]-${process.env.VUE_APP_VERSION}-${Timestamp}.js` // name+版本号+时间戳控制缓存
      config.output.filename(filename).chunkFilename(filename)
    }

    // css输出配置
    // （使用：extract-text-webpack-plugin，待）

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
  },
}