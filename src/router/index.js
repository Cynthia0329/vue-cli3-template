import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/layout'

/* Router Modules */
import echartsRouter from './modules/echarts'
import componentsRouter from './modules/components'
import documentsRouter from './modules/documents'
import pixiv from './modules/pixiv'
import lofter from './modules/lofter'


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
  pixiv,
  lofter,
  componentsRouter,
  echartsRouter,
  documentsRouter,
  {
    path: '/test/index',
    component: Layout,
    meta: { title: '测试页', hasSubMenu: false },
    children: [
      {
        path: '/test/index',
        hidden: false,
        component: () => import('@/views/test'),
        meta: { title: '切换测试页主题', hasSubMenu: false },
      }
    ]
  },
]

export default new Router({
  routes: constantRoutes
})
