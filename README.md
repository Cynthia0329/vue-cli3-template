# README



## 下一步计划

- [ ] 读取Excel文件
- [ ] 引入文件夹【layout】，并制定父子两级的导航
- [ ] 引入iconfont字体图标







## 更新



### 2020-07-22

- 引入vue-echarts
- 新增几种类型的echarts用例
- 主题切换功能（一个简单demo）
- 兼容各类浏览器样式的滚动条组件
- 打包优化配置：体积进一步减小
- 公共化utils方法（可通过 `this.utils.xxx` 调用）



### 2020-04-29

- 引入axios
- 引入vuex和mixins
- 引入全局过滤器和全局指令
- 局部引入element-ui组件
- 配置不同的打包环境
  - 配置打包ip地址
- 增加config中，打包相关的配置项
  - js和图片输出配置
  - 生产打包时，输出打包分析
  - 配置全局统一引入scss文件
- 增加通用sass样式



## 包含的功能模块
- 引入sass模块



## config配置
- 全局自动引入sass模块
- 设置别名@
- js和图片打包输出配置
- 打包分析插件

待配置
- 用 extract-text-webpack-plugin 从js文件中抽取css打包（config中配置）
- 配置使用CDN
- 打包压缩



## echarts示例

### 官网demo要点

#### 示例01

https://echarts.apache.org/examples/zh/editor.html?c=bar-stack

- 柱状堆叠图：多组
- markLine：这个demo的指向很有意思

### 分类



### 未分类

#### demo03

> 标域markArea

- 标域的颜色和主题色的顺序保持一致







#### demo05

> 饼图

- 饼图的大小和位置
- 图例的形状





#### demo06

> 柱状图

- Y轴百分号保留两位小数



#### demo07

> 简单的堆叠柱状图，只有一组
>
> 多组可参考官方demo：https://echarts.apache.org/examples/zh/editor.html?c=bar-stack

















