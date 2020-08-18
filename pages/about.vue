<template>
  <div>
    <section class="sm:flex sm:flex-reverse justify-between">
      <div class="w-2/3 m-auto sm:m-0 sm:-ml-4 sm:w-1/3 sm:flex sm:items-start">
        <img src="~/assets/self.png" alt="profile picture" class="-mt-4" />
      </div>
      <div class="sm:w-2/3">
        <p class="mb-4 text-2xl">Hello!</p>
        <p>
          I am a Baltimore-based front end web developer and UX/UI designer
          creating engaging, thoughtful user experiences. Committed to
          research-based design thinking to creatively explore problems and
          potential solutions. Received a post-graduate UX Design degree from
          the Maryland Institute College of Art. Founder of
          &lt;head&gt;&lt;body&gt;.
        </p>
        <p class="mt-4 text-lg">
          Currently
          <router-link to="/contact" class="underline font-bold"
            >available</router-link
          >
          for freelance work.
        </p>
        <hr class="my-4" />
        <section class="m-auto flex justify-between mt-4">
          <div>
            <h2 class="mb-4">TECH</h2>
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
