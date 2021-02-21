import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Graphs from '../components/Chart.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/graphs',
    name: 'Graphs',
    component: Graphs
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
