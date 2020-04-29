import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
import VueRouter from 'vue-router';

import App from './App.vue';

import './assets/tailwind.css';

Vue.use(VueRouter);
Vue.use(VueTypedJs);

Vue.config.productionTip = false;

import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import COVID19Tracker from './pages/projects/COVID19Tracker';

const routes = [
  { path: '/', component: Landing },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/projects/covid-19-tracker', component: COVID19Tracker },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
