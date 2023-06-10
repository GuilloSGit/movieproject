<template>
  <div>
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.overview }}</p>
    <p>Fecha de lanzamiento: {{ movie.release_date }}</p>
    <!-- Agrega aquí otros detalles de la película que desees mostrar -->
  </div>
</template>

<script>
import apiClient from "@/api";

export default {
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    this.fetchMovie();
  },
  methods: {
    fetchMovie() {
      const movieId = this.$route.params.id;

      apiClient
        .get(`/movie/${movieId}`)
        .then((response) => {
          this.movie = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
