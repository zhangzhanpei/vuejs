<template>
  <div id="app" class="col-md-8 col-md-offset-2">
    <div>
        <router-view></router-view>
    </div>
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
<style>
    #app {
      margin-top: 2%;
    }
</style>
