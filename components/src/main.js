import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Routers from './router.js';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: Routers.routers
});
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
