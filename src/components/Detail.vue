<template>
  <br />

  <div>
    <h5>
      <b>{{ 블로그글[$route.params.detail].title }}</b>
    </h5>
    <br />
    <p>{{ 블로그글[$route.params.detail].content }}</p>
    <router-link
      :to="{ path: '/detail/' + $route.params.detail + '/' + 'comment' }"
      ><button>댓글</button></router-link
    ><br /><br />
    <router-link
      :to="{ path: '/detail/' + $route.params.detail + '/' + 'author' }"
      ><button>작가</button></router-link
    ><br /><br />
    <router-view /><br /><br />

    <button @click="$router.go(-1)">뒤로가기</button>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    블로그글: Object,
  },
};
</script>

<style>
</style>