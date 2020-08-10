<template>
  <div class="pt-48 px-20">
    <vue-typed-js
      :strings="['Hello.^600 I\'m Allen.']"
      @onComplete="enterContent"
    >
      <h1 class="text-3xl">
        <span class="typing"></span>
      </h1>
    </vue-typed-js>
    <ul v-show="showContent" class="mt-6 mb-12 text-lg">
      <li>- Front End Developer</li>
      <li>- UX/UI Designer</li>
    </ul>
    <div class="transform duration-500 hover:scale-105 origin-left">
      <nuxt-link v-show="showContent" to="/about"
        >Let's create something together... -></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Index',
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    enterContent() {
      this.showContent = true;
      const targets = document.querySelectorAll('li');
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
          begin: () => (document.querySelector('a').style.display = 'inline'),
        });
    },
  },
};
</script>
