<template>
  <div>
    <div class="flex justify-between items-baseline">
      <h3 class="text-xl">{{ title }}</h3>
      <h3>({{ category }})</h3>
    </div>
    <div class="text-base my-5">
      <slot />
    </div>
    <hr class="border-black rounded-lg my-8" />
  </div>
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
  },
};
</script>

<style></style>
