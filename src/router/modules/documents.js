import Layout from '@/layout'

const documentsRouter = {
  path: '/documents',
  component: Layout,
  hidden: false,
  meta: { title: '文档', hasSubMenu: true },
  children: [
    {
      path: '/documents/readExcel',
      hidden: false,
      component: () => import('@/views/documents/readExcel'),
      meta: { title: '读取Excel', hasSubMenu: false },
    }
  ]
}

export default documentsRouter