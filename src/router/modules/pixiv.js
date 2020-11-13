import Layout from '@/layout'

const componentsRouter = {
  path: '/pixiv',
  component: Layout,
  hidden: false,
  meta: { title: 'Pixiv', hasSubMenu: true },
  children: [
    {
      path: '/pixiv/pv',
      hidden: false,
      component: () => import('@/views/pixiv/pv'),
      meta: { title: '阅览量', hasSubMenu: true },
      children: [
        {
          path: '/pixiv/data',
          hidden: false,
          component: () => import('@/views/pixiv/pv/data'),
          meta: { title: '数据下载', hasSubMenu: false },
        },
        {
          path: '/pixiv/month',
          hidden: false,
          component: () => import('@/views/pixiv/pv/month'),
          meta: { title: '月数据', hasSubMenu: false },
        },
        {
          path: '/pixiv/week',
          hidden: false,
          component: () => import('@/views/pixiv/pv/week'),
          meta: { title: '周数据', hasSubMenu: false },
        },
      ]
    },
    {
      path: '/pixiv/tag',
      hidden: false,
      component: () => import('@/views/pixiv/tag'),
      meta: { title: 'Tag', hasSubMenu: true },
      children: [
        {
          path: '/tag/character',
          hidden: false,
          component: () => import('@/views/pixiv/tag/character'),
          meta: { title: '角色', hasSubMenu: false },
        },
        {
          path: '/tag/cp',
          hidden: false,
          component: () => import('@/views/pixiv/tag/cp'),
          meta: { title: 'CP', hasSubMenu: false },
        },
      ]
    },
  ]
}

export default componentsRouter