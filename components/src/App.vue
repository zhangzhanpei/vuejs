<template>
  <div id="app" class="col-md-8 col-md-offset-2">
    <nav>
      <ul class="nav nav-pills">
        <li role="presentation"><router-link to="/">首页</router-link></li>
        <li role="presentation"><router-link to="/posts">文章</router-link></li>
      </ul>
    </nav>
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
