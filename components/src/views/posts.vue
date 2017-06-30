<template>
    <div>
        <div class="col-md-12" style="margin-top: 20px">
          <ul class="posts-list">
            <li v-for="(item, index) in articles"><router-link :to="`/posts/show/${item.id}`">{{item.date | formatDate}}&nbsp;&nbsp;{{item.title}}</router-link></li>
          </ul>
        </div>
        <paginate :page.sync="page" :totalPages="totalPages"></paginate>
    </div>
</template>
<script>
const paginate = require("../components/paginate.vue");
export default {
  data () {
    return {
      articles: null,
      page: 1,
      totalPages: 10
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getPosts(this.page);
    });
  },
  methods: {
    getPosts (page) {
      this.$axios.get(`http://localhost:3000/api/articles/${this.page}`).then(response => {
        this.articles = response.data.posts;
        this.totalPages = response.data.count;
      });
    }
  },
  filters: {
    formatDate (date) {
      return date.substring(0, 10);
    }
  },
  watch: {
    page () {
      this.getPosts(this.page);
    }
  },
  components: {
    paginate
  }
}
</script>
<style>
.posts-list {
  padding: 0;
}
.posts-list li {
  list-style: none;
  margin-bottom: 15px;
}
</style>