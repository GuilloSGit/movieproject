<template>
  <div class="container">
    <br />
    <h2>Popular Movies</h2>
    <br />
    <filters @filters-applied="applyFilters"></filters>
    <div class="row">
      <div class="col-md-4" v-for="movie in filteredMovies" :key="movie.id">
        <div class="card">
          <img
            :src="getImageUrl(movie.poster_path)"
            :alt="movie.title"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.description }}</p>
            
            <router-link :to="{name: 'movies.details', params:{id:movie.id }}" class="btn btn-primary"
              >View Details</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import apiClient from "@/api";
import Filters from "@/components/FilterComp.vue";

export default {
  components: {
    Filters,
  },
  data() {
    return {
      movies: [],
      filters: {
        genre: null,
        duration: null,
      },
    };
  },
  mounted() {
    this.fetchMovies();
  },
  computed: {
    filteredMovies() {
      let filteredMovies = this.movies;

      if (this.filters.genre) {
        filteredMovies = filteredMovies.filter(
          (movie) => movie.genre_id === parseInt(this.filters.genre)
        );
      }

      if (this.filters.duration === "short") {
        filteredMovies = filteredMovies.filter((movie) => movie.duration < 60);
      } else if (this.filters.duration === "medium") {
        filteredMovies = filteredMovies.filter(
          (movie) => movie.duration >= 60 && movie.duration <= 120
        );
      } else if (this.filters.duration === "long") {
        filteredMovies = filteredMovies.filter((movie) => movie.duration > 120);
      }

      return filteredMovies;
    },
  },

  methods: {
    fetchMovies() {
      apiClient
        .get("/movie/popular")
        .then((response) => {
          this.movies = response.data.results;
          console.log(this.movies)
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
    applyFilters(filters) {
      this.filters = filters;
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
