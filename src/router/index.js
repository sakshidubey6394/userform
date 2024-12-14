import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '@/views/UsersView.vue'
import ProfileView from '@/views/ProfileView.vue'
import EditCreateView from '@/views/EditCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/users',
      children: [
        {
          path: '',
          name: 'users',
          component: UsersView,
        },
        {
          path: ':id',
          name: 'profile',
          component: ProfileView,
        },
        {
          path: 'edit/:id',
          name: 'edit-user',
          component: EditCreateView,
        },
        {
          path: 'new',
          name: 'add-user',
          component: EditCreateView,
        },
      ],
    },
  ],
})

export default router
