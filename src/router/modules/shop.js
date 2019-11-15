
import Layout from '@/layout'

const shopRouter = {
  path: '/shop',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Shop',
  meta: {
    title: 'shop',
    icon: 'chart'
  },
  children: [
    {
      path: 'shopAd',
      component: () => import('@/views/shop/ad/AdPosition'),
      name: 'shopAd',
      meta: { title: 'Shop' }
    },
    {
      path: 'shopUser',
      component: () => import('@/views/shop/user/ShopUser'),
      name: 'shopUser',
      meta: { title: 'ShopUser' }
    }

  ]
}
export default shopRouter
