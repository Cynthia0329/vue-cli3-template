import Layout from '@/layout'

const echartsRouter = {
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
      path: '/echarts/line',
      hidden: false,
      component: () => import('@/views/echarts/Line'),
      meta: { title: '折线图', hasSubMenu: true },
      children: [
        {
          path: '/echarts/line/Line01',
          hidden: false,
          component: () => import('@/views/echarts/Line/Line01'),
          meta: { title: 'Line01', hasSubMenu: false },
        }
      ]
    },
    {
      path: '/echarts/bar',
      hidden: false,
      component: () => import('@/views/echarts/Bar'),
      meta: { title: '饼图', hasSubMenu: true },
      children: [
        {
          path: '/echarts/bar/demo01',
          hidden: false,
          component: () => import('@/views/echarts/Bar/demo01'),
          meta: { title: '圆环', hasSubMenu: false },
        }
      ]
    },
    {
      path: '/echarts/map',
      hidden: false,
      component: () => import('@/views/echarts/Map'),
      meta: { title: '地图', hasSubMenu: true },
      children: [
        {
          path: '/echarts/map/demo01',
          hidden: false,
          component: () => import('@/views/echarts/Map/demo01'),
          meta: { title: '世界地图', hasSubMenu: false },
        }
      ]
    },
  ]
}


export default echartsRouter