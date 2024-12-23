import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('../views/ShoppingBasket.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
