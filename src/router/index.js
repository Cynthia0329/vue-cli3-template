import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/subpage',
      name: 'subpage',
      component: () => import('@/views/subpage')
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: () => import('@/views/echarts'),
    },
    {
      path: '/theme',
      name: 'theme',
      component: () => import('@/views/theme')
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: () => import('@/views/scroll')
    },
    {
      path: '/onStorage',
      name: 'onStorage',
      component: () => import('@/views/onStorage')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/demo/components/detail')
    },
  ]
})
