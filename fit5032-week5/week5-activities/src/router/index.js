import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import { ref } from 'vue'

const isAuthenticated = ref(false)

export function Verify() {
  isAuthenticated.value = true
}

export function Logout() {
  isAuthenticated.value = false
  alert('You have logged out successfully.')
}

export function Check() {
  return isAuthenticated.value
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,

    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated.value)
      if (isAuthenticated.value) {
        next()
      } else {
        alert('Access denied')
        next(false)
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
