<template>
  <div class="w-full pt-8 px-4">
    <div class="max-w-3xl m-auto">
      <Header class="mb-16" />
      <section
        class="w-full px-4 py-8 border-white border-2 rounded-lg tab-content text-sm sm:text-base"
      >
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
