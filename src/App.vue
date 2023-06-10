<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <SlidebarComp></SlidebarComp>
    <MovieList></MovieList>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import SlidebarComp from "./components/SlidebarComp.vue";
import MovieList from "./components/MovieList.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp,
    SlidebarComp,
    MovieList,
  },
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
