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
      children: [
        {
          path: 'demo01',
          name: 'demo01',
          component: () => import('@/views/echarts/demo01'),
        },
        {
          path: 'demo02',
          name: 'demo02',
          component: () => import('@/views/echarts/demo02'),
        },
        {
          path: 'demo03',
          name: 'demo03',
          component: () => import('@/views/echarts/demo03'),
        },
        {
          path: 'demo04',
          name: 'demo04',
          component: () => import('@/views/echarts/demo04'),
        },
        {
          path: 'demo05',
          name: 'demo05',
          component: () => import('@/views/echarts/demo05'),
        },
      ]
    }
  ]
})
