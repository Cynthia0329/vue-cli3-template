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
        path: '/echarts/index',
        hidden: false,
        component: () => import('@/views/echarts'),
        meta: { title: '图表主页', hasSubMenu: false },
      },
      {
        path: '/echarts/demo03',
        hidden: false,
        component: () => import('@/views/echarts/demo03'),
        meta: { title: 'demo03', hasSubMenu: false },
      },
      {
        path: '/echarts/line',
        hidden: false,
        component: () => import('@/views/echarts/Line'),
        meta: { title: '折线图表', hasSubMenu: true },
        children: [
          {
            path: '/echarts/line/Line01',
            hidden: false,
            component: () => import('@/views/echarts/Line/Line01'),
            meta: { title: 'Line01', hasSubMenu: false },
          }
        ]
      },
    ]
  },
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
