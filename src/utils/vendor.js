// 第三方插件和组件库的相关引入
import Vue from 'vue'

// // 引入iconfont图标
// import '@/assets/iconfont/iconfont.css'

// // lodash工具函数库
// import lodash from 'lodash'
// Vue.prototype.$lodash = lodash

// 按需引入element-ui
// https://element.eleme.cn/#/zh-CN/component/quickstart
import 'element-ui/lib/theme-chalk/index.css'
import { Message } from 'element-ui'
Vue.prototype.$message = Message

// 引入vue-echarts
import ECharts from 'vue-echarts/components/ECharts.vue'
Vue.component('v-chart', ECharts)