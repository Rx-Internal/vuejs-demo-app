import { createRouter, createWebHistory } from "vue-router";

import Agenda from "../page/Agenda.vue";

const routes = [{ path: "/", name: "Agenda", component: Agenda }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
