import Vue from 'vue';
import VueAnime from 'vue-animejs';
import VueTypedJs from 'vue-typed-js';
import VueRouter from 'vue-router';

import App from './App.vue';

import './assets/tailwind.css';

Vue.use(VueRouter);
Vue.use(VueAnime);
Vue.use(VueTypedJs);

Vue.config.productionTip = false

import Landing from './pages/Landing.vue'

const routes = [
    { path: '/', component: Landing }
]

const router = new VueRouter({
    routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
