import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase';

const routes = [
    {
        path: '/',
        component: () => import('../components/Dashboard.vue'),
        beforeEnter: () => {
          if (!auth.currentUser) {
            return  '/login' ;
          }
        }
      },
      {
        path: '/login',
        component: () => import('../components/Login.vue'),
      }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;