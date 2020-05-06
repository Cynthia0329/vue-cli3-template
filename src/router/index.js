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
          path: 'line01',
          name: 'line01',
          component: () => import('@/views/echarts/line01'),
        },
        {
          path: 'line02',
          name: 'line02',
          component: () => import('@/views/echarts/line02'),
        },
        {
          path: 'demo03',
          name: 'demo03',
          component: () => import('@/views/echarts/demo03'),
        },
      ]
    }
  ]
})
