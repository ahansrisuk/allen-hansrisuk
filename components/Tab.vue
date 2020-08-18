<template>
  <nuxt-link :to="path">
    <div class="top-border-radius py-1 px-4 border-2 border-b-0">
      <h2>{{ title }}</h2>
      <transition :css="false" @enter="tabEnter" @leave="tabLeave">
        <div v-if="active" class="overlay h-1"></div>
      </transition>
    </div>
  </nuxt-link>
</template>

<script>
import anime from 'animejs';
export default {
  name: 'Tab',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
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
  border-color: black;
}
.overlay {
  top: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background-color: #f2f2f2;
}
</style>
