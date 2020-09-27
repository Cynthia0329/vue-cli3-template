
const pages = [
  {
    path: '/echarts',
    name: 'echarts',
    hidden: false,
    component: () => import('@/views/echarts'),
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
    name: 'theme',
    hidden: false,
    component: () => import('@/views/theme'),
    meta: { title: '切换主题', hasSubMenu: false },
  },
]

export default pages