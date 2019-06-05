import Vue from 'vue'
import Router from 'vue-router'

let demo1 = resolve => require(['@/views/demo1/index.vue'], resolve); 

let demo2 = resolve => require(['@/views/demo2/index.vue'], resolve);


let demo3 = resolve => require(['@/views/demo3/index.vue'], resolve);

let demo4 = resolve => require(['@/views/demo4/index.vue'], resolve);

let demo5 = resolve => require(['@/views/demo5/index.vue'], resolve);

Vue.use(Router)

var router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'demo1',
        component: demo1
    },{
        path: '/demo2',
        name: 'demo2',
        component: demo2
    },{
        path: '/demo3',
        name: 'demo3',
        component: demo3
    },{
        path: '/demo4',
        name: 'demo4',
        component: demo4
    },{
        path: '/demo5',
        name: 'demo5',
        component: demo5
    }]
})

export default router
