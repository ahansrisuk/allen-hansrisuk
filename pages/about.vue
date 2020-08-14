<template>
  <div>
    <p>
      Hello! I am a Baltimore-based front end web developer and UX/UI designer
      creating engaging, thoughtful user experiences.
    </p>
    <p class="mt-4 mb-8">
      Currently
      <router-link to="/contact" class="underline font-bold"
        >available</router-link
      >
      for freelance work.
    </p>

    <img src="~/assets/self.png" alt="profile picture" width="125px" />
    <section class="flex justify-between mt-4">
      <div>
        <h2 class="mb-4">PREFERRED TOOLS</h2>
        <ul>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Figma</li>
        </ul>
      </div>
      <div>
        <h2 class="mb-4">SKILLS</h2>
        <ul>
          <li>Front End Development</li>
          <li>UI/UX Design</li>
          <li>Wireframes/Prototypes</li>
          <li>User Journey Maps</li>
          <li>UX Research</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'About | Allen Hansrisuk',
    };
  },
};
</script>
