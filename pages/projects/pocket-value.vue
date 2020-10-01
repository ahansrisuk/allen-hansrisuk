<template>
  <div>
    <span>Product Design</span>
    <h1 class="text-3xl mb-4">Pocket Value</h1>
    <p class="mb-4">
      Lightweight, item value reference guide for Animal Crossing: New Horizons
      created to address quality of life issues in the game. Item Database API
      was created using Laravel Lumen and front end was created using Vue.js.
      Featured as a
      <a
        href="https://www.reddit.com/r/webdev/comments/gbhsgg/for_those_bitten_by_the_animal_crossing_bug_i/"
        target="_blank"
        class="underline"
        >top post</a
      >
      on Reddit's /r/webdev community.
      <a href="https://pocket-value.com" target="_blank" class="underline"
        >Link to app</a
      >
      ->
    </p>
    <div class="flex w-full justify-between mb-12">
      <div class="w-24 sm:w-48 md:w-56">
        <img
          src="@/assets/pocket-value/PV1.png"
          alt="wireframe 1"
          class="w-full"
        />
      </div>
      <div class="w-24 sm:w-48 md:w-56">
        <img
          src="@/assets/pocket-value/PV2.png"
          alt="wireframe 2"
          class="w-full"
        />
      </div>
      <div class="w-24 sm:w-48 md:w-56">
        <img
          src="@/assets/pocket-value/PV3.png"
          alt="wireframe 3"
          class="w-full"
        />
      </div>
    </div>
    <section class="mb-12">
      <h2 class="text-xl">Testimonials</h2>
      <hr />
      <ul class="list-disc ml-4">
        <li class="my-2">
          "Excellent app! My wife loves animal crossing and will be using this
          app a lot!"
        </li>
        <li class="my-2">
          "Good f%#*ing job. This is exactly how you get projects, tech stack
          check marks etc added to your portfolio."
        </li>
        <li class="my-2">
          "This is amazing! perfect colors and minimal without being obscured."
        </li>
        <li class="my-2">
          "Thanks for making such a useful, mobile-friendly site. I have it as a
          tab that’s always open on my phone’s browser!"
        </li>
      </ul>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Background</h2>
      <hr />
      <div class="m-auto flex justify-center sm:float-right my-4">
        <img src="@/assets/pocket-value/acnh.jpg" alt="ACNH" />
      </div>
      <p class="my-4">
        Animal Crossing: New Horizons is a 2020 life simulation video game
        developed and published by Nintendo for the Nintendo Switch. It sold
        five million digital copies in its first month, breaking the console
        game record for most digital units sold in a single month. It became the
        best-selling game in the Animal Crossing series and the second
        best-selling game on the Nintendo Switch, with over 22 million units
        sold. Its success has been partially attributed to its release during
        the COVID-19 pandemic, with players seeking a sense of escapism amid
        worldwide stay-at-home orders (<a
          href="https://en.wikipedia.org/wiki/Animal_Crossing:_New_Horizons"
          class="underline"
          >Source</a
        >).
      </p>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Problem/Assumptions</h2>
      <hr />
      <p class="my-4">
        Within the game, you are able to buy tickets to visit other computer
        generated islands. On these islands, you can take part in gathering
        items, fish, bugs, and other resources with the intent to sell them on
        your island for the in-game currency, Bells. The Bells are then spent to
        improve your own island. Since the number of items you can carry is
        limited, it is in your best interest to bring back the most valuable
        items from these island visits in order to maximize your haul. With the
        vast number of items available in the game, I set out to create an item
        database for all items available under the assumption that other players
        of the game would find this documentation useful.
      </p>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Research</h2>
      <hr />
      <p class="my-4">
        I set out to explore any existing databases on the game. Nook's Island,
        Nookipedia, and the Animal Crossing Fandom wiki were all websites that
        document item information. I documented what information each site
        presented, how it was displayed, and what potentially made one database
        more successful than it's competitors. While playing the game, I
        attempted to use each of these resources to accompany my gameplay.
      </p>
      <div class="my-4">
        <img src="@/assets/pocket-value/bells.jpg" alt="bells" />
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-xl">Goals</h2>
      <hr />
      <p class="my-4">
        After conducting competitor research on the other databases, I was able
        to define the niche that my app would fill.
      </p>
      <ul class="list-disc ml-4">
        <li class="my-2">
          I would create an item database that displays the values of items
          found in the game.
        </li>
        <li class="my-2">
          The app would be designed with a mobile-first user experience. The
          competitors' mobile experience was very poor. I assumed that users
          enjoying Animal Crossing, are more likely to have mobile devices
          nearby as opposed to laptop or desktop devices.
        </li>
        <li class="my-2">
          None of the competitors had a feature allowing you to add the items to
          a virtual "cart". This would allow the user to quickly see how much
          their total inventory value is.
        </li>
      </ul>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Design/Wireframing</h2>
      <hr />
      <p class="my-4">
        The design system was inspired by the colors and fonts found in Animal
        Crossing. I wanted to create a companion app that users would feel fit
        perfectly with the UI in the game. I wanted to ensure that users could
        easily navigate app using one hand.
      </p>
      <p class="my-4">
        A typical task flow could include loading the app -> clicking on an item
        category -> clicking on the item to view info -> adding the item to the
        bag. However, there are many places where a user can simply add an item
        or check total value, bypassing some steps in the example task flow.
      </p>
      <div class="my-4">
        <img src="@/assets/pocket-value/wireframes.png" alt="wireframes" />
      </div>
      <p class="my-4">
        From left to right: Home Screen, Alternate Home Screen Design with Item
        Category dropdown expanded, Item Information Modal, and Inventory Page
        with total value calculated.
      </p>
    </section>
    <section class="">
      <h2 class="text-xl">Conclusion</h2>
      <hr />
      <p class="my-4">
        The application was then launched as a single page application (SPA)
        with progressive web app support, further enhancing the mobile user
        experience. I was so glad to hear that other users have found this app
        useful and the /r/webdev community was supportive and helpful in
        submitting UX enhancements and bug reports. Overall, this passion
        project was a valuable exploration into backend and front end
        technologies, app deployment, competitive research, and wireframing. It
        was nice taking an idea through an abbreviated UX design process and
        making it a reality on my own.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'project',
  components: {},
};
</script>

<style scoped></style>
