<template>
  <div>
    <p class="text-xl my-4 mb-2">
      {{ title }}
    </p>
    <div class="mb-4">
      <slot />
    </div>
    <div>
      <slot name="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wireframe',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
