<template>
  <div>
    <h2>Popular Movies</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <router-link :to="`/movie/${movie.id}`">
          <div class="movie-card">
            <img
              :src="getImageUrl(movie.poster_path)"
              :alt="movie.title"
              class="movie-poster"
            />
            <p class="movie-title">{{ movie.title }}</p>
          </div>
        </router-link>
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
.movie-card {
  text-align: center;
}

.movie-poster {
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
}

.movie-title {
  font-size: 16px;
  font-weight: bold;
}
</style>
