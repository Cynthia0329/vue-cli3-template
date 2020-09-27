import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
import pages from './modules/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      hidden: false,
      redirect: '/index',
      children: pages
    }
  ]
})
