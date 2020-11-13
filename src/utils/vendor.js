// 第三方插件和组件库的相关引入
import Vue from 'vue'

// // 引入iconfont图标
// import '@/assets/iconfont/iconfont.css'

// // lodash工具函数库
// import lodash from 'lodash'
// Vue.prototype.$lodash = lodash

import './boost' // 引入自定义拓展JS方法

// 日期格式化插件
import moment from 'moment'
Vue.use(moment)
Vue.prototype.$moment = moment

// 全局引入LocalStorage方法
// import {setLocalStorage, getLocalStorage} from '@/utils/localStorage'
// Vue.prototype.$setLocalStorage = setLocalStorage
// Vue.prototype.$getLocalStorage = getLocalStorage

// 引入vue-echarts
import ECharts from 'vue-echarts/components/ECharts.vue'
Vue.component('v-chart', ECharts)

// 引入摘要组件
import  '@/components/popup/index.js'

// 引入自定义工具函数文件
import * as utils from '@/utils'
Vue.prototype.utils = utils


// 滚动条组件
import EaScrollbar from '@/components/scrollbar/index.js'
Vue.use(EaScrollbar)

// 引入XLSX
import XLSX from 'xlsx'
Vue.use(XLSX)


// 按需引入element-ui
// https://element.eleme.cn/#/zh-CN/component/quickstart
import 'element-ui/lib/theme-chalk/index.css'
import { 
  Message, 
  Switch, 
  Scrollbar, 
  Tabs, 
  TabPane,
  RadioGroup,
  RadioButton,
  Card,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dialog,
  Upload,
} from 'element-ui'
Vue.prototype.$message = Message
Vue.use(Switch)
Vue.use(Scrollbar)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Card)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dialog)
Vue.use(Upload)