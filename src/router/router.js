import { createRouter, createWebHistory } from 'vue-router';

import MovieList from '@/components/MovieList.vue';
import MovieDetail from '@/components/MovieDetail.vue';

const routes = [
  {
    path: '/movies',
    name: 'movies',
    component: MovieList,
  },
  {
    path: '/movie/:id',
    name: 'movie-details',
    component: MovieDetail,
  },
  // 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
