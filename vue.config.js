// 配置参考：https://cli.vuejs.org/zh/config/

module.exports = {
  css: {
    // css预设器配置项
    loaderOptions: {
      //设置css中引用文件的路径，引入通用使用的scss文件
      sass: {
        data: `@import "@/styles/index.scss";`
      }
    }
  }
}