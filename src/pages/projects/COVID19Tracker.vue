<template>
  <div
    class="bwh-font bg-light text-black w-full absolute left-0 top-0 py-4 text-sm sm:text-base"
  >
    <div class="max-w-screen-lg m-auto overflow-auto">
      <div
        class="inline-block mb-8 ml-2"
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
      >
        <router-link to="/projects" class="text-black font-bold code">
          &lt;- Back
        </router-link>
      </div>

      <div class="flex justify-center">
        <img
          src="../../assets/covid-19-tracker/bwh-logo.png"
          class="w-2/3 sm:w-1/2"
        />
      </div>

      <section>
        <div class="blue p-2 px-4 mt-4 text-white">
          <h1 class="text-3xl font-bold">COVID-19 Tracker</h1>
          <span class="text-sm">UX/UI Design - Wireframing & Prototyping</span>
        </div>
        <div class="p-4 bg-gray-100">
          <p>
            In the midst of the COVID-19 outbreak, Brigham and Women's Hospital
            in Boston, MA wanted to explore a solution that would help contain
            the spread of COVID-19 and benefit the healthcare workers on the
            frontlines.
          </p>
          <br />
          <p>
            With providers working around the clock, the hospital wanted to get
            data regarding their well-being, physically and mentally. The data
            would be used to alleviate provider burnout and ensure the health
            and safety of their staff.
          </p>
        </div>
      </section>

      <section class="p-4 my-2">
        <h2>The app would need to fulfill these core functions:</h2>
        <hr class="border-black" />
        <ul class="p-4 list-disc">
          <li>Mobile app</li>
          <li>Mechanism to track provider burnout.</li>
          <li>Mechanism to report any symptoms related to COVID-19.</li>
          <li>Notifications for hospital protocol.</li>
          <li>Build awareness and share helpful resources.</li>
        </ul>
      </section>

      <section class="p-4 my-2">
        <h2 class="font-bold text-xl">IDEATION:</h2>
        <p>
          Taking these initial requirements, I collaborated with stakeholders to
          create a wireflow outlining the needed functions and screens in our
          app.
        </p>
        <div class="md:flex">
          <figure class="my-4">
            <img
              src="../../assets/covid-19-tracker/wireflow.png"
              alt="COVID-19 Tracker Wireflow"
            />
            <figcaption class="text-xs my-2">
              [fig. 1] Initial wireflow
            </figcaption>
          </figure>
          <figure class="my-2">
            <img
              src="../../assets/covid-19-tracker/sketches.png"
              alt="COVID-19 Tracker Sketches"
            />
            <figcaption class="text-xs my-2">
              [fig. 2] App sketches - home screen, provider burnout interface
              and COVID-19 symptoms interface. Progress rings were chosen to
              portray levels of COVID-19 risk and burnout risk as many of their
              intended users are familiar with this interface via Apple iOS.
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="p-4 my-2">
        <h2 class="font-bold text-xl">PROTOTYPING:</h2>
        <p>
          Created high-fidelity wireframes and clickable prototype to
          demonstrate potential user journeys and interactions within the app.
          The notifications serve as a way for users to be reminded to enter
          their feelings or report any symptoms. Additionally, they can be used
          to remind users to follow hospital protocol. In this case, the user is
          reminded to report to a testing area to check their temperature. The
          wireframes demonstrate the app behavior when a user selects certain
          feelings or symptoms. For example, reporting a cough may increase the
          user's likelihood for COVID-19.
        </p>
        <div>
          <figure class="py-4">
            <img
              src="../../assets/covid-19-tracker/notifications.png"
              alt="COVID-19 Notifications"
              class="p-2"
            />
            <figcaption class="text-xs my-2">
              [fig. 3] Notification screen designs - recent news articles
              pertaining to the hospital, reminders to report symptoms and
              well-being, and hospital protocol updates.
            </figcaption>
          </figure>
          <figure class="py-4">
            <img
              src="../../assets/covid-19-tracker/wireframes.png"
              alt="COVID-19 Tracker Wireframes"
              class="p-2"
            />
            <figcaption class="text-xs my-2">
              [fig. 4] Wireframes
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Utility from '../../components/Utility.js';

export default {
  name: 'COVID19Tracker',
  mixins: [Utility],
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
.bwh-font {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

.blue {
  background-color: #012d5a;
}
</style>
