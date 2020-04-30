<template>
  <div
    id="app"
    class="p-4 h-screen flex-col w-full overflow-auto bg-black text-white"
  >
    <div class="max-w-lg m-auto">
      <div v-if="onCoreRoute">
        <Header />
        <section class="flex">
          <Tab title="about" />
          <Tab title="projects" class="ml-2" />
          <Tab title="contact" class="ml-2" />
        </section>
      </div>
      <section :class="tabContent">
        <transition @enter="enter" :css="false" mode="out-in">
          <router-view></router-view>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Tab from './components/Tab';
import anime from 'animejs';

export default {
  name: 'App',
  components: {
    Header,
    Tab,
  },
  computed: {
    onCoreRoute() {
      let path = this.$route.path;
      return path == '/about' || path == '/projects' || path == '/contact';
    },
    tabContent() {
      return this.onCoreRoute ? 'tab-content' : '';
    },
  },
  methods: {
    enter(el, done) {
      if (this.onCoreRoute) {
        anime({
          targets: el,
          opacity: [0, 1],
          easing: 'easeInOutSine',
          duration: 400,
          complete: done,
        });
      }
    },
  },
};
</script>
