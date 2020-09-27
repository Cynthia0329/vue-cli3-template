
const pages = [
  {
    path: '/index',
    name: 'index',
    hidden: false,
    component: () => import('@/views/index'),
    meta: { title: '首页', hasSubMenu: false },
  },
  {
    path: '/echarts',
    name: 'echarts',
    hidden: false,
    component: () => import('@/views/echarts'),
    meta: { title: '图表', hasSubMenu: false },
  },
  {
    path: '/theme',
    name: 'theme',
    hidden: false,
    component: () => import('@/views/theme'),
    meta: { title: '切换主题', hasSubMenu: false },
  },
]

export default pages