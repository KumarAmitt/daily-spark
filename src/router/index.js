import {createRouter, createWebHistory} from 'vue-router'
import NewsView from '@/views/NewsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'news',
      component: NewsView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/category/:category?',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    { path: '/:notFound(.*)', redirect: '/' }
  ],
  scrollBehavior() {
    return {top: 0, left: 0, behavior: 'smooth'}
  }
})


export default router
