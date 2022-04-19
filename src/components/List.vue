<template>
  <br />
  <div v-for="(a, i) in 블로그글" :key="i">
    <!-- <router-link class="title" :to="{ path : '/detail/' + i }"><h5 class="title"><b>{{블로그글[i].title}}</b></h5></router-link><br>  -->
    <!-- router-link to에서 path를 지정할때 /url/ + 변수를 넣고 싶으면 :to="{ path : '/url/' + 변수 }"를 기억하자 -->

    <h5 @click="$router.push('/detail/' + i)" class="title">
      <b>{{ 블로그글[i].title }}</b>
    </h5>

    <p class="date">{{ 블로그글[i].date }}</p>
    <br />
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    블로그글: Object,
  },
  data() {
    return {};
  },
};
</script>

<style>
.title {
  text-decoration: none;
  color: black;
}
</style>