import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName "home" */ './views/Home.vue'),
    meta: {
      layout: 'AppLayoutHome'
    }
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import(/* webpackChunkName "library" */ './views/Library.vue'),
    meta: {
      layout: 'AppLayoutLibrary'
    }
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import(/* webpackChunkName "employee" */ './views/Employee.vue'),
    meta: {
      layout: 'AppLayoutEmployee'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router