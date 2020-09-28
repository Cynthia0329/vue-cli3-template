import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  hidden: false,
  meta: { title: '组件示例', hasSubMenu: true },
  children: [
    { // 滚动条
      path: '/components/scroll',
      hidden: false,
      component: () => import('@/views/components/scroll'),
      meta: { title: '滚动条', hasSubMenu: true },
      children: [
        {
          path: '/components/scroll/demo01',
          hidden: false,
          component: () => import('@/views/components/scroll/demo01'),
          meta: { title: 'el-scrollbar', hasSubMenu: false },
        },
        {
          path: '/components/scroll/demo02',
          hidden: false,
          component: () => import('@/views/components/scroll/demo02'),
          meta: { title: 'ea-scrollbar', hasSubMenu: false },
        },
      ]
    },
    {
      path: '/components/popup',
      hidden: false,
      component: () => import('@/views/components/popup'),
      meta: { title: '弹窗组件', hasSubMenu: false },
    }
  ]
}

export default componentsRouter