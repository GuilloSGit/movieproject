<template>
  <div class="container">
    <h2>Popular Movies</h2>
    <div class="row">
      <div class="col-md-4" v-for="movie in movies" :key="movie.id">
        <div class="card">
          <img
            :src="getImageUrl(movie.poster_path)"
            :alt="movie.title"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.description }}</p>
            <router-link :to="`/movie/${movie.id}`" class="btn btn-primary"
              >View Details</router-link
            >
          </div>
        </div>
      </div>
    </div>
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
    getImageUrl(path) {
      if (path) {
        return `https://image.tmdb.org/t/p/w500/${path}`;
      }
      return "";
    },
  },
};
</script>

<style scoped>
.card {
  width: 18rem;
  margin-bottom: 20px;
}
</style>
