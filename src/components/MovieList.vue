<template>
  <div>
    <h2>Popular Movies</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <router-link :to="`/movie/${movie.id}`">{{ movie.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from "@/api";

export default {
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      apiClient
        .get("/movie/popular")
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
