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

import Landing from './pages/Landing.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';

const routes = [
    { path: '/', component: Landing },
    { path: '/about', component: About},
    { path: '/projects', component: Projects},
    { path: '/contact', component: Contact},
]

const router = new VueRouter({
    routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
