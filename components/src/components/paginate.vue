<template>
    <nav>
        <ul class="pagination">
            <li v-bind:class="{disabled: page === 1}"><a @click.prevent="prevPage">&lt;&lt;</a></li>
            <li v-bind:class="{active: item === page}" v-for="(item, index) in items"><a @click.prevent="gotoPage(item)">{{item}}</a></li>
            <li v-bind:class="{disabled: page === totalPages}"><a @click.prevent="nextPage">&gt;&gt;</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    props: ['page', 'totalPages'],
    data () {
        return {
            items: []
        }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.paginate();
      });
    },
    methods: {
        prevPage () {
            if (this.page > 1) {
                this.$emit('update:page', this.page - 1);
            }
        },
        nextPage () {
            if (this.page < this.totalPages) {
                this.$emit('update:page', this.page + 1);
            }
        },
        gotoPage (pageNum) {
            this.$emit('update:page', pageNum);
        },
        paginate (n = 4) {
            this.items = [];
            let startPage = 1;
            let endPage = this.totalPages;
            if (this.page > n) {
                startPage = this.page - n;
            }
            if (this.page + n < this.totalPages) {
                endPage = this.page + n;
            }
            for (let i = startPage; i <= endPage; i++) {
                this.items.push(i);
            }
        }
    },
    watch: {
        page () {
            this.paginate();
        }
    }
}
</script>
<style>
.pagination li a{cursor: pointer;}
</style>
