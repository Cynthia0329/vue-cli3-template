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
    { // 折线图 Line
      path: '/echarts/line',
      hidden: false,
      component: () => import('@/views/echarts/Line'),
      meta: { title: '折线图', hasSubMenu: true },
      children: [
        {
          path: '/echarts/line/demo01',
          hidden: false,
          component: () => import('@/views/echarts/Line/demo01'),
          meta: { title: '单条折线', hasSubMenu: false },
        },
        {
          path: '/echarts/line/demo02',
          hidden: false,
          component: () => import('@/views/echarts/Line/demo02'),
          meta: { title: '多条折线', hasSubMenu: false },
        },
        {
          path: '/echarts/line/demo03',
          hidden: false,
          component: () => import('@/views/echarts/Line/demo03'),
          meta: { title: '标域markArea', hasSubMenu: false },
        },
      ]
    },
    { // 柱状图 Bar
      path: '/echarts/bar',
      hidden: false,
      component: () => import('@/views/echarts/Bar'),
      meta: { title: '柱状图', hasSubMenu: true },
      children: [
        {
          path: '/echarts/bar/demo01',
          hidden: false,
          component: () => import('@/views/echarts/Bar/demo01'),
          meta: { title: '多个柱状', hasSubMenu: false },
        },
        {
          path: '/echarts/bar/demo02',
          hidden: false,
          component: () => import('@/views/echarts/Bar/demo02'),
          meta: { title: '堆叠图', hasSubMenu: false },
        },
      ]
    },
    { // 饼图 Pie
      path: '/echarts/pie',
      hidden: false,
      component: () => import('@/views/echarts/Pie'),
      meta: { title: '饼图', hasSubMenu: true },
      children: [
        {
          path: '/echarts/pie/demo01',
          hidden: false,
          component: () => import('@/views/echarts/Pie/demo01'),
          meta: { title: '基础圆环', hasSubMenu: false },
        },
        {
          path: '/echarts/pie/demo02',
          hidden: false,
          component: () => import('@/views/echarts/Pie/demo02'),
          meta: { title: '基础饼图', hasSubMenu: false },
        },
      ]
    },
    { // 地图 Map
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