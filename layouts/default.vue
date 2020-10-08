<template>
  <div class="w-full pt-8 px-4">
    <div class="max-w-3xl m-auto">
      <Header class="mb-16" />
      <section class="flex text-sm sm:text-lg">
        <Tab title="about" />
        <Tab title="projects" class="ml-2" />
        <Tab title="contact" class="ml-2" />
      </section>
      <section
        class="w-full px-4 py-8 border-white border-2 rounded-lg tab-content"
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

<style>
@import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@2/distr/fira_code.css);

html {
  font-family: 'Fira Code', monospace;
  background-color: #f2f2f2;
  font-weight: 500;
  color: black;
}

.tab-content {
  border-top-left-radius: 0;
}
</style>
