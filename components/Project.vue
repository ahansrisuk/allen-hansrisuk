<template>
  <nuxt-link :to="link" class="hover:font-bold">
    <div class="flex justify-between items-baseline">
      <h3 class="text-lg md:text-xl">{{ title }}</h3>
      <h3 class="text-xs md:text-base">({{ category }})</h3>
    </div>
    <div class="my-5">
      <slot />
    </div>
    <hr class="border-black rounded-lg my-8" />
  </nuxt-link>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
