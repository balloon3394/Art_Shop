import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatsviewPage from '../views/CatsviewPage.vue'
import DogsviewPage from '../views/DogsviewPage.vue'
import PetviewPage from '../views/PetviewPage.vue'

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
    path: '/dogs',
    name: 'Dogs',
    component: DogsviewPage
  },
  {
    path: '/pet',
    name: 'Pet',
    component: PetviewPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
