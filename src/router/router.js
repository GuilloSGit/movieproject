import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/movies",
    name: "movies",
    component: () => import("../components/MovieList.vue"),

    children: [
      {
        path: "/movies/:id",
        name: "movies.details",
        component: () => import("../components/MovieDetail.vue"),
      },

      {
        path: "/movies:id",
        name: "movies.details",
        component: () => import("../components/MovieDetail.vue"),
      },
    ],
    //
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
