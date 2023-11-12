import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(
    process.env.NODE_ENV ===
      'production'
      ? '/teoxoft-employee-list/'
      : '/'
  ),
  routes,
});

export default router;
