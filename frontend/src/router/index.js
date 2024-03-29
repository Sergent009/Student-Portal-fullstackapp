import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import regPage from '../views/RegisterPage.vue'
import logPage from '../views/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: regPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: logPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
