import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ClavierView from "@/views/ClavierView";
import AddView from "@/views/AddView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/add',
    name: 'add',
    component: AddView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
