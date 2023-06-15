<template>
  <div class="container">
    <h2>Movie Detail</h2>
    <div v-if="selectedMovie">
      <h3>{{ selectedMovie.title }}</h3>
      <h4>{{ selectedMovie.overview }}</h4>
      <img :src="getImageUrl(selectedMovie.poster_path)" :alt="selectedMovie.title" />
      <p>{{ selectedMovie.description }}</p>
    </div>
    <div v-else>
      <p>Loading movie detail...</p>
    </div>
  </div>
</template>

<script>
import apiClient from "@/api";

export default {
  data() {
    return {
      selectedMovie: null,
    };
  },
  created() {
    this.fetchMovieById();
  },
  methods: {
    fetchMovieById() {
      const id = this.$route.params.id;
      apiClient
        .get(`/movie/${id}`)
        .then((response) => {
          this.selectedMovie = response.data;
          console.log(this.selectedMovie)
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getImageUrl(path) {
      if (path) {
        return `https://image.tmdb.org/t/p/w500/${path}`;
      }
      return "";
    },
  },
};
</script>