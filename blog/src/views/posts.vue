<template>
    <div class="col-md-12 article">
        <h2 v-text="title"></h2>
        <p>
          <i class="glyphicon glyphicon-calendar"></i>&nbsp;<span v-text="date"></span>
          <i class="glyphicon glyphicon-eye-open" style="margin-left: 10px;"></i>&nbsp;<span v-text="click"></span>
        </p>
        <div v-html="content"></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      title: null,
      content: null,
      date: null,
      click: null
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      let id = this.$route.params.id;
      this.$axios.get(`http://localhost:3000/api/articles/show/${id}`).then((response) => {
        this.title = response.data.posts[0].title;
        this.content = response.data.posts[0].content;
        this.date = response.data.posts[0].date;
        this.click = response.data.posts[0].click;
      });
    });
  }
}
</script>
<style>
.article {
  padding-left: 8%;
  padding-right: 8%;
}
.article h2 {
  margin-bottom: 20px;
}
.article p {
  line-height: 1.6;
  font-size: 15px;
}
</style>
