<template>
  <div class="m-auto pt-48 w-full max-w-md" v-cloak>
    <vue-typed-js
      :strings="['Hello.^600 I\'m Allen.']"
      @onComplete="enterContent"
    >
      <h1 class="text-2xl">
        <span class="typing"></span>
      </h1>
    </vue-typed-js>
    <ul class="mt-8 mb-12" v-show="showContent">
      <li>- Front End Developer</li>
      <li>- UX/UI Designer</li>
    </ul>
    <div
      class="text-sm"
      v-show="showContent"
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
    >
      <router-link to="/about"
        >Let's create something together ... -></router-link
      >
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import Utility from '../components/Utility.js';

export default {
  name: 'Landing',
  mixins: [Utility],
  data: function () {
    return {
      showContent: false,
    };
  },
  methods: {
    enterContent() {
      this.showContent = true;
      let targets = document.querySelectorAll('li');
      anime
        .timeline()
        .add({
          targets: targets,
          delay: (el, i) => 800 + i * 800,
          opacity: [0, 1],
          translateY: [50, 0],
          easing: 'easeOutElastic',
        })
        .add({
          targets: 'a',
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeInOutSine',
        });
    },
  },
};
</script>
