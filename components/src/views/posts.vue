<template>
    <div>
        <paginate :page.sync="page" :totalPages="totalPages"></paginate>
    </div>
</template>
<script>
const paginate = require("../components/paginate.vue");
export default {
  data () {
    return {
      page: 1,
      totalPages: 20
    }
  },
  components: {
    paginate
  }
}
</script>
