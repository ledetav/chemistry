import { createRouter, createWebHistory } from 'vue-router'
import loadingWindow from '@/views/loadingWindow.vue'
import appWindow from '@/views/appWindow.vue'

const routes = [
  {
    path: '/',
    name: 'loading',
    component: loadingWindow
  },

  {
    path: '/app',
    name: 'main',
    component: appWindow
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
