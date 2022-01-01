import { createRouter, createWebHistory } from 'vue-router'
import loadingWindow from '@/views/loadingWindow.vue'
import appWindow from '@/views/appWindow.vue'

const routes = [
  {
    path: '/',
    name: 'Cemistry WebApp 2.0',
    component: loadingWindow
  },

  {
    path: '/app',
    name: 'Window',
    component: appWindow
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
