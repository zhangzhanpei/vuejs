<template>
<ul>
    <li><a v-link="{path: '/home'}">Home</a></li>
    <li><a v-link="{path: '/about'}">About</a></li>
    <li><a href="http://www.baidu.com/">Baidu</a></li>
</ul>
<router-view></router-view>
</template>
