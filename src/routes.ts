import { createRouter, createWebHistory } from "vue-router";
import AboutView from "./views/AboutView.vue";
import HomeView from "./views/HomeView.vue";
import TestView from "./views/TestView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/test", component: TestView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
