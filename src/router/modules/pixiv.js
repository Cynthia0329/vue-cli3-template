import Layout from '@/layout'

const componentsRouter = {
  path: '/pixiv',
  component: Layout,
  hidden: false,
  meta: { title: 'P站数据', hasSubMenu: true },
  children: [
    {
      path: '/pixiv/data',
      hidden: false,
      component: () => import('@/views/pixiv/data'),
      meta: { title: '数据下载', hasSubMenu: false },
    },
    {
      path: '/pixiv/month',
      hidden: false,
      component: () => import('@/views/pixiv/month'),
      meta: { title: '月数据', hasSubMenu: false },
    },
    {
      path: '/pixiv/week',
      hidden: false,
      component: () => import('@/views/pixiv/week'),
      meta: { title: '周数据', hasSubMenu: false },
    },
  ]
}

export default componentsRouter