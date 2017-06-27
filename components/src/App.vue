<template>
  <div id="app">
    <posts></posts> 
  </div>
</template>

<script>
const posts = require("./views/posts.vue");
export default {
  name: 'app',
  components: {
    posts
  }
}
</script>
