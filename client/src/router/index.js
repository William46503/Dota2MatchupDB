import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../App.vue") },
  {
    path: "/:heroName/matchData",
    name: "heroPage",
    component: () => import("../views/MatchData.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
