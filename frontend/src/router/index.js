import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import regPage from '../views/RegisterPage.vue'
import logPage from '../views/LoginPage.vue'
import mainPage from '../views/MainPage.vue'

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
  },
  {
    path: '/Home',
    name: 'mainPage',
    component: mainPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
