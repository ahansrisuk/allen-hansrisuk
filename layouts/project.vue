<template>
  <div class="w-full pt-8 px-4">
    <div class="max-w-3xl m-auto">
      <Header class="mb-16" />
      <section class="w-full py-8">
        <Nuxt />
      </section>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  components: {
    Header,
  },
};
</script>
