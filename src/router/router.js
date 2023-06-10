import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes para las rutas
import MovieList from '@/components/MovieList.vue';
import MovieDetails from '@/components/MovieDetails.vue';

const routes = [
  {
    path: '/movies',
    name: 'movies',
    component: MovieList,
  },
  {
    path: '/movie/:id',
    name: 'movie-details',
    component: MovieDetails,
  },
  // 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
