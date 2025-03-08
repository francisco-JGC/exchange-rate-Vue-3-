import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/home/homePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
