<template>
<div class="message">{{ msg }}</div>
<div class="hehe">{{ hehe }}</div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Hello from vue-loader!',
            hehe: 'hehe'
        }
    }
}
</script>

<style>
.message { color: blue;}
.hehe{ color: gray; }
</style>
