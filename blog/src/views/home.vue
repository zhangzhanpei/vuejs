<template>
    <div>
        <div class="col-md-12">
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
    display: block;
    list-style: none;
    padding: 10px 15px;
    border: 1px solid #ddd;
    margin-bottom: -1px;
}
.posts-list li:hover {
    background-color: #eee;
}
.posts-list li:first-child {
    border-radius: 4px 4px 0 0;
}
.posts-list li:last-child {
    border-radius: 0 0 4px 4px;
}
.posts-list li a{
    color: #428bca;
    font-size: 15px;
}
.posts-list li a:hover {
    text-decoration: none;
}
</style>
