import Layout from '@/views/layout/index.vue'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/analysis',
    children: [
      {
        path: 'analysis',
        component: () => import('@/views/dashboard/analysis.vue'),
        name: 'analysis',
        meta: {
          keepAlive: false
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/index.vue'),
        name: 'user',
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/article/index.vue'),
        name: 'article',
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
