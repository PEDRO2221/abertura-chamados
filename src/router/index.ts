import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Recuperacao",
    component: Login,
  },
  {
    path: "/home",
    name: "Dashboard",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
