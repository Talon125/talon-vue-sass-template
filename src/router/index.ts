import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/projects/school',
      name: 'School Projects',
      component: () => import('../views/projects/SchoolProjects.vue')
    },
    {
      path: '/projects/personal',
      name: 'Personal Projects',
      component: () => import('../views/projects/PersonalProjects.vue')
    },
    {
      path: '/connections',
      name: 'Connections',
      component: () => import('../views/ConnectionsView.vue')
    },
    {
      path: '/credits',
      name: 'Credits',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreditsView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not Found',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
