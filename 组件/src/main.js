import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(VueRouter);
var router = new VueRouter();
router.map({
    '/home': {
        component: Home
    },
    '/about': {
        component: About
    }
});
var demo = Vue.extend({
    components: { App }
});
router.start(demo, 'body');