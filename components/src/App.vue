<template>
  <div id="app" class="col-md-8 col-md-offset-2">
    <nav>
      <ul class="nav nav-pills">
        <li role="presentation" :class="{active: $route.path === '/'}"><router-link to="/">首页</router-link></li>
        <li role="presentation" :class="{active: $route.path === '/posts'}"><router-link to="/posts">文章</router-link></li>
        <li role="presentation" :class="{active: $route.path === '/transition'}"><router-link to="/transition">过渡</router-link></li>
      </ul>
    </nav>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
const posts = require("./views/posts.vue");
const transition = require("./views/transition.vue");
export default {
  name: 'app',
  components: {
    posts
  }
}
</script>
