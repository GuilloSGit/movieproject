<template>
  <div>
    <h2>Popular Movies</h2>
    <div class="movie-grid">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <router-link :to="`/movie/${movie.id}`">
          <div class="movie-content">
            <img
              :src="getImageUrl(movie.poster_path)"
              :alt="movie.title"
              class="movie-poster"
            />
            <p class="movie-title">{{ movie.title }}</p>
          </div>
        </router-link>
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
.movie-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie-card {
  text-align: center;
  margin: 10px;
}

.movie-content {
  margin-bottom: 10px;
}

.movie-poster {
  width: 200px;
  height: 300px;
  object-fit: cover;
}

.movie-title {
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
}
</style>
