import { createRouter, createWebHistory } from 'vue-router'
import InvoiceResult from '@/views/InvoiceResult.vue'
import InvoiceHome from '@/views/InvoiceHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'InvoiceHome',
      component: InvoiceHome,
    },
    {
      path: '/result',
      name: 'InvoiceResult',
      component: InvoiceResult,
      props: true,
    },
  ],
})

export default router
