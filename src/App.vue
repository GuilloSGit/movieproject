<template>
  <HeaderComp></HeaderComp>
  <SlidebarComp></SlidebarComp>
  <FooterComp></FooterComp>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import SlidebarComp from './components/SlidebarComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
    SlidebarComp
}
}
</script>

<style>

/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /*WTFIM
}
*/

@import './assets/css/styles.css';
</style>


