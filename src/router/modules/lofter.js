import Layout from '@/layout'

const componentsRouter = {
  path: '/lofter',
  component: Layout,
  hidden: false,
  meta: { title: 'Lofter', hasSubMenu: true },
  children: [
    {
      path: '/lofter/character',
      hidden: false,
      component: () => import('@/views/lofter/character'),
      meta: { title: '角色', hasSubMenu: false },
    },
    {
      path: '/lofter/cp',
      hidden: false,
      component: () => import('@/views/lofter/cp'),
      meta: { title: 'CP', hasSubMenu: false },
    },
  ]
}

export default componentsRouter