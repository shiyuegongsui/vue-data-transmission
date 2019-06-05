import Vue from 'vue'
import Router from 'vue-router'

let demo1 = resolve => require(['@/views/demo1/index.vue'], resolve); //登录页面


Vue.use(Router)

var router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'demo1',
        component: demo1
    }]
})

export default router
