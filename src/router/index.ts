import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { localCache } from '@/utils'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('../view/login/index.vue')
  },
  {
    path: '/home',
    component: () => import('../view/home/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 未登录时拦截跳去登录页
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.get('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
