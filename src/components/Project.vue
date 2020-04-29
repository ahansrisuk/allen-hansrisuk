<template>
  <transition mode="out-in" :css="false">
    <div>
      <h3 class="mb-2 flex justify-between items-center">
        <button class="focus:outline-none" @click="show = !show">
          {{ title }}
        </button>
        <transition @enter="labelEnter" @leave="labelLeave" :css="false">
          <span v-show="show" class="text-xs">({{ label }})</span>
        </transition>
      </h3>
      <transition
        @enter="descriptionEnter"
        @leave="descriptionLeave"
        :css="false"
      >
        <p v-show="show" style="height: 200px;">
          <router-link :to="path"> {{ description }} -> </router-link>
        </p>
      </transition>
    </div>
  </transition>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'Project',
  props: ['title', 'path', 'description', 'label'],
  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    labelEnter(el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        translateX: [-200, 0],
        easing: 'easeInOutSine',
        duration: 300,
        complete: done,
      });
    },
    labelLeave(el, done) {
      anime({
        targets: el,
        opacity: [1, 0],
        translateX: -200,
        easing: 'easeInOutSine',
        duration: 300,
        complete: done,
      });
    },
    descriptionEnter(el, done) {
      anime({
        targets: el,
        'max-height': ['0px', '1000px'],
        easing: 'easeInOutSine',
        opacity: [0, 1],
        duration: 800,
        complete: done,
      });
    },
    descriptionLeave(el, done) {
      anime({
        targets: el,
        'max-height': 0,
        easing: 'easeInOutSine',
        opacity: [1, 0],
        duration: 300,
        complete: done,
      });
    },
  },
};
</script>

<style></style>
