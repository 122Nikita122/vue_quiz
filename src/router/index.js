import Vue from 'vue';
import VueRouter from 'vue-router';
import PageTest from'../views/PageTest.vue'
import Home from'../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home, 
    },
    {
        path: '/test',
        name: 'PageTest',
        component: PageTest, 
    }
];

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });