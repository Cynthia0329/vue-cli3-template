import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/layout'

/* Router Modules */
import echartsRouter from './modules/echarts'


export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    hidden: false,
    meta: { title: '首页', hasSubMenu: false },
    redirect: '/', 
    children: [
      {
        path: '/',
        hidden: false,
        component: () => import('@/views/index'),
      },
    ]
  },
  echartsRouter,
  {
    path: '/theme/index',
    component: Layout,
    meta: { title: '切换主题', hasSubMenu: false },
    children: [
      {
        path: '/theme/index',
        hidden: false,
        component: () => import('@/views/theme'),
        meta: { title: '切换主题', hasSubMenu: false },
      }
    ]
  },
]

export default new Router({
  routes: constantRoutes
})
