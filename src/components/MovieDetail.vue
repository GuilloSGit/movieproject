<template>
  <div class="movie-detail">
    <div class="movie-poster">
      <img :src="movie.poster_path" alt="Movie Poster" />
    </div>
    <div class="movie-info">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  props: ["movie"],
};
</script>

<style scoped>
.movie-detail {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.movie-poster img {
  width: 200px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.movie-info {
  flex-grow: 1;
}

.movie-info h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.movie-info p {
  font-size: 16px;
  line-height: 1.5;
  color: #666666;
}
</style>
