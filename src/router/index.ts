import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Result from '@/pages/Result.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
      props: true,
    },
  ],
})

export default router
