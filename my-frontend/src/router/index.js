import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatsviewPage from '../views/CatsviewPage.vue'
import practiceviewPage from '../views/practiceviewPage.vue'
import PetviewPage from '../views/PetviewPage.vue'
import loginviewPage from '../views/loginviewPage.vue'
import RegisterviewPage from '@/views/registerviewPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cats',
    name: 'Cats',
    component: CatsviewPage
  },
  {
    path: '/Practice',
    name: 'Practice',
    component: practiceviewPage
  },
  {
    path: '/pet',
    name: 'Pet',
    component: PetviewPage
  },
  {
    path: '/login',
    name: 'Login',
    component: loginviewPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterviewPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
