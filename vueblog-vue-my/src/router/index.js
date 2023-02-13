import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import hello from '../views/hello.vue'
import dong from '../views/dong.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hello',
    name: 'hello',
    component: hello
  },
  {
    path: '/dong',
    name: 'dong',
    component: dong
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
