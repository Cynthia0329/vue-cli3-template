// 第三方插件和组件库的相关引入
import Vue from 'vue'

// // 引入iconfont图标
// import '@/assets/iconfont/iconfont.css'

// // lodash工具函数库
// import lodash from 'lodash'
// Vue.prototype.$lodash = lodash

// 滚动条组件
import EaScrollbar from '@/components/scrollbar/index.js'
Vue.use(EaScrollbar)

// 按需引入element-ui
// https://element.eleme.cn/#/zh-CN/component/quickstart
import 'element-ui/lib/theme-chalk/index.css'
import { 
  Message, 
  Switch, 
  Scrollbar, 
} from 'element-ui'
Vue.prototype.$message = Message
Vue.use(Switch)
Vue.use(Scrollbar)

// 引入vue-echarts
import ECharts from 'vue-echarts/components/ECharts.vue'
Vue.component('v-chart', ECharts)