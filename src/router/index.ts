import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import index from '../pages/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Agenda',
    component: index,
    meta: {
      title: 'Cardio On',
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard example
router.beforeEach((to, from, next) => {
  // Set page title
  document.title = `${to.meta.title}`;
  next();
});

export default router;
