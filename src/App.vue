<template>
  <NavBar />
  <!-- <MainContent/><br> -->

  <router-link class="HomeRouter" to="/">홈페이지</router-link> &nbsp;
  <router-link class="ListRouter" to="/list">리스트페이지</router-link> <br />

  <div class="mt-4">
    <router-view :블로그글="블로그글" />
  </div>

  <!-- <List :블로그글="블로그글[i]" v-for="(a,i) in 블로그글" :key="i"/> -->
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import MainContent from './components/MainContent.vue'
// import List from './components/List.vue'
import blog from "./assets/data.js";

export default {
  name: "App",
  data() {
    return {
      블로그글: blog,
    };
  },
  components: {
    NavBar: NavBar,
    // MainContent : MainContent,
    // List : List
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.HomeRouter {
  text-decoration: none;
  color: black;
}

.ListRouter {
  text-decoration: none;
  color: black;
}
</style>
