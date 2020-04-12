import Vue from 'vue';
import VueAnime from 'vue-animejs';
import VueRouter from 'vue-router';

import App from './App.vue';

import './assets/tailwind.css';

Vue.use(VueRouter)
Vue.use(VueAnime)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
