module.exports = {
    routers: [
        {path: '/', component: require('./views/home.vue')},
        {path: '/posts', component: require('./views/posts.vue')}
    ]
}
