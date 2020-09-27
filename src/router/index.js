import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

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
  {
    path: '/echarts',
    component: Layout,
    hidden: false,
    meta: { title: '图表', hasSubMenu: true },
    children: [
      {
        path: '/echarts/demo03',
        name: 'demo03',
        hidden: false,
        component: () => import('@/views/echarts/demo03'),
        meta: { title: 'demo03', hasSubMenu: false },
      }
    ]
  },
  {
    path: '/theme',
    component: Layout,
    redirect: '/theme/index',
    meta: { title: '切换主题', hasSubMenu: false },
    children: [
      {
        path: 'index',
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
