import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/LayoutWave.vue'
import Article from '@/views/article/MyArticle.vue'
import Friends from '@/views/frinds/FrindsLink.vue'
import Project from '@/views/project/MyProject.vue'
import Pigeonhole from '@/views/pigeonhole/MyPigeonhole.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Layout},
    { path: '/article', component: Article },
    { path: '/friends', component: Friends },
    { path: '/project', component: Project },
    { path: '/pigeonhole', component: Pigeonhole },
    // { path: '*', component: NotFind }
  ]
})

export default router
