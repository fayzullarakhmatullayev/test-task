import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "stock",
    component: () => import("@/views/Stock.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("@/views/Favorites.vue"),
  },

  {
    path: "/deals",
    name: "deals",
    component: () => import("@/views/Deals.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
