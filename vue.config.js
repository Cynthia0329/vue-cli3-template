// 配置参考：https://cli.vuejs.org/zh/config/

// 解析文件路径
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
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
    // 自定义alias名称
    config.resolve.alias
    .set('@', resolve('src'))
  },
}