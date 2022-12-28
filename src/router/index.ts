import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { localCache } from '@/utils'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../view/main/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackPrefetch: true */ '../view/404/404.vue')
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
