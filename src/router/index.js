import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '/home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/test1',
    name: '/test1',
    component: () => import('@/views/test1.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
