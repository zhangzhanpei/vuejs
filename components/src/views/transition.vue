<template>
    <div class="col-md-12" id="transition">
        <transition name="fade">
            <img src="../assets/a.jpg" v-show="show == 0">
        </transition>
        <transition name="fade">
            <img src="../assets/b.jpg" v-show="show == 1">
        </transition>
    </div>
</template>
<script>
export default {
    data () {
        return {
            show: 0
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            window.setInterval(() => {
                this.show = (this.show + 1) % 2;
            }, 3000);
        });
    }
}
</script>
<style>
#transition {
    margin-top: 20px;
}
#transition img {
    width: 100%;
    position: absolute;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
