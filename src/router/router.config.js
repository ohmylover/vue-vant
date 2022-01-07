/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      login_require: false, // 登录限制
      keepAlive: true
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: true }
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/info/index'),
        meta: { title: '详情页', keepAlive: false }
      }
    ]
  }
]
