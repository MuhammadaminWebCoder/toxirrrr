import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'LogIn',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop.vue')
    },
    {
      path: '/seecategory:id',
      name: 'Seecategory',
      component: () => import('../views/SeeCategory.vue')
    },
    {
      path: '/productadd',
      name: 'productadd',
      component: () => import('../views/ProductPlus.vue')
    },
    {
      path: '/changecategory',
      name: 'changecategory',
      component: () => import('../views/ChangeCat.vue')
    }
  ]
})

export default router
