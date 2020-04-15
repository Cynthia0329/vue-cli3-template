import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import directive from './utils/directive'
import filter from './utils/filter'

Vue.config.productionTip = false

import '@/utils/boost.js' // 引入自定义拓展JS方法

Vue.use(directive)
Vue.use(filter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
