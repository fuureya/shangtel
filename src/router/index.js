import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";

import Carrier from "@/pages/CarrierPage.vue";
import ServicesPage from "@/pages/ServicesPage.vue";
import AboutPage from "@/pages/AboutPage.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/tentang-kami",
    name: "TentangKami",
    component: AboutPage,
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
