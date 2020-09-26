<template>
  <header>
    <nuxt-link to="/about" class="flex justify-between">
      <h1 class="text-2xl md:text-3xl font-bold">allen hansrisuk</h1>
      <span v-if="backButton" class="text-4xl">🔙</span>
    </nuxt-link>

    <hr class="border-white border-t-4 rounded-lg mt-2" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    backButton: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
