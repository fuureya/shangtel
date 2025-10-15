import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";
import Portfolio from "@/pages/Portfolio.vue";
import Carrier from "@/pages/Carrier.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/carrier",
    name: "Carrier",
    component: Carrier,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
