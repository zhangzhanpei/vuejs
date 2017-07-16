module.exports = {
    routers: [
        {path: '/', component: require('./views/home.vue')},
        {path: '/posts/show/:id', component: require('./views/posts.vue')}
    ]
}
