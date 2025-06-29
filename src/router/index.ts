import App from '@/App.vue'
import Menu from '@/layout/menu.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: App,
    },
  
  ],
})

export default router
