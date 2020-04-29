<template>
  <router-link :to="path">
    <div class="top-border-radius py-1 px-4 border-2 border-b-0 text-sm">
      <h2>{{ title }}</h2>
      <transition @enter="tabEnter" @leave="tabLeave" :css="false">
        <div v-if="active" class="overlay h-1"></div>
      </transition>
    </div>
  </router-link>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Tab',
  props: ['title'],
  computed: {
    path() {
      return '/' + this.title;
    },
    active() {
      return this.$route.path === this.path;
    },
  },
  methods: {
    tabEnter(el, done) {
      anime({
        targets: el,
        scaleX: [0, 1],
        easing: 'easeInSine',
        duration: 300,
        complete: done,
      });
    },
    tabLeave(el, done) {
      anime({
        targets: el,
        scaleX: [1, 0],
        easing: 'easeInSine',
        duration: 300,
        complete: done,
      });
    },
  },
};
</script>

<style>
.top-border-radius {
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  text-align: center;
  position: relative;
  border-color: white;
}

.overlay {
  top: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background-color: black;
}

.tab-content {
  border-top-left-radius: 0;
}
</style>
