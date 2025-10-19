import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PerfilView from '../views/PerfilView.vue'
import AmigosView from '../views/AmigosView.vue'
import PublicacionesView from '../views/PublicacionesView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/perfil', name: 'perfil', component: PerfilView },
  { path: '/amigos', name: 'amigos', component: AmigosView },
  { path: '/publicaciones', name: 'publicaciones', component: PublicacionesView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
