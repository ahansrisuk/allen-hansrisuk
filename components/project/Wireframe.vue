<template>
  <div class="md:flex mt-4">
    <div class="md:w-2/3">
      <p class="text-xl mb-2">
        {{ title }}
      </p>
      <div class="mb-4">
        <slot />
      </div>
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
