import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";
import Portfolio from "@/pages/PortfolioPage.vue";
import Carrier from "@/pages/CarrierPage.vue";
import ServicesPage from "@/pages/ServicesPage.vue";

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
  {
    path: "/services",
    name: "Services",
    component: ServicesPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
