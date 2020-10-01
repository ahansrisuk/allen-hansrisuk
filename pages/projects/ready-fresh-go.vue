<template>
  <div>
    <span>UX/UI Design</span>
    <h1 class="text-3xl mb-4">Ready, Fresh, Go!</h1>
    <p class="mb-4">
      Case study and value proposition for a food truck business model and app
      intended to address food deserts and build community.
    </p>
    <div class="flex w-full justify-between mb-12">
      <div class="w-24 sm:w-48 md:w-56">
        <img
          src="@/assets/covid-19-project/BWH1.png"
          alt="wireframe 1"
          class="w-full"
        />
      </div>
      <div class="w-24 sm:w-48 md:w-56">
        <img
          src="@/assets/covid-19-project/BWH2.png"
          alt="wireframe 2"
          class="w-full"
        />
      </div>
      <div class="w-24 sm:w-48 md:w-56">
        <img
          src="@/assets/covid-19-project/BWH3.png"
          alt="wireframe 3"
          class="w-full"
        />
      </div>
    </div>
    <section class="mb-12">
      <h2 class="text-xl">Background</h2>
      <hr />
      <p class="my-4">
        In the midst of the COVID-19 outbreak, Brigham and Women's Hospital
        wanted to explore a solution that would help contain the spread of
        COVID-19 and benefit the healthcare workers on the frontlines. With
        providers working around the clock, the hospital wanted to get data
        regarding their well-being, physically and mentally. The data would be
        used to alleviate provider burnout and ensure the health and safety of
        their staff.
      </p>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Research</h2>
      <hr />
      <p class="my-4">
        Much of the research was conducted before my involvement through
        surveys. At the time, they found that many staff members had an
        overwhelming feeling of "burnout" as many were working beyond their
        scheduled hours to meet hospital needs. They found that many were not
        taking their scheduled breaks and following hospital testing protocol.
        In addition, many were unaware of hospital's educational resources on
        COVID-19.
      </p>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Problem/Requirements</h2>
      <hr />
      <p class="my-4">
        With the research completed stakeholders and I were able to prioritize a
        list of core functions for our solution. The app would have to:
      </p>
      <ul class="list-disc ml-4">
        <li>be a mobile app</li>
        <li>track provider burnout</li>
        <li>report COVID-19 symptoms</li>
        <li>notify staff of hospital protocol</li>
        <li>build awareness and share resources</li>
      </ul>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Journey Mapping</h2>
      <hr />
      <p class="my-4">
        While stakeholders at the hospital defined a user task flow, I used a
        wireflow approach to map out each screen and functionality to cohesively
        tie together each page of the app.
      </p>
      <div>
        <img
          src="@/assets/covid-19-project/task-flow.png"
          alt="task flow diagram"
        />
      </div>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Wireframing</h2>
      <hr />
      <Wireframe title="Home Screen" class="mb-8">
        <ul class="list-disc ml-4">
          <li class="my-2">
            Top navigation bar provides a quick snapshot of COVID-19 risk and
            Burnout score.
          </li>
          <li class="my-2">
            Sections are displayed based on order of importance: Headline News,
            Burnout, COVID-19 Risk, Recent News, Helpful Resources
          </li>
        </ul>
        <template v-slot:image>
          <img
            src="@/assets/covid-19-project/home.png"
            alt="home screen wireframe"
          />
        </template>
      </Wireframe>
      <Wireframe title="Burnout Screen" class="mb-8">
        <ul class="list-disc ml-4">
          <li>
            Provides the mechanism where users can report their sense of
            wellbeing over time.
          </li>
          <li>
            Completion rings were used as many users stated that they were
            familiar with the design through Apple Health and Wellness apps.
          </li>
          <li>
            Burnout score is to be derived from an equation to be determined.
            The score was deemed required as a means to quantify users feelings.
          </li>
        </ul>
        <template v-slot:image>
          <img
            src="@/assets/covid-19-project/burnout-score.png"
            alt="home screen wireframe"
          />
        </template>
      </Wireframe>
      <Wireframe title="COVID-19 Screen" class="mb-8">
        <ul class="list-disc ml-4">
          <li>
            COVID-19 symptoms are reported here. The ring will change color to
            provide a visual cue at different levels of risk.
          </li>
          <li>
            Likelihood to contract COVID-19 is determined by the user's reported
            symptoms.
          </li>
        </ul>
        <template v-slot:image>
          <img
            src="@/assets/covid-19-project/covid-19-score.png"
            alt="home screen wireframe"
          />
        </template>
      </Wireframe>
      <Wireframe title="Notification Screen" class="mb-8">
        <ul class="list-disc ml-4">
          <li>
            This is a sample notification screen to remind the user to report in
            and get their temperature checked per hospital protocol.
          </li>
          <li>
            Similar notification screens were created to remind the user to
            report their COVID-19 symptoms and notify them of recent news.
          </li>
        </ul>
        <template v-slot:image>
          <img
            src="@/assets/covid-19-project/notification-temp.png"
            alt="home screen wireframe"
          />
        </template>
      </Wireframe>
    </section>
    <section class="">
      <h2 class="text-xl">Conclusion</h2>
      <hr />
      <p class="my-4">
        Final deliverables for this project included all sketches, wireframes,
        journey diagrams, and a clickable prototype. At this point, it is
        unclear to me whether the hospital has the resources to develop the
        application. The project proved to be a challenging learning experience
        for myself and the hospital team. Although it was nice to see
        stakeholder involvement in the project, I would have liked to have
        conducted more user research and usability testing with the early
        wireframes rather than have the stakeholders speak on behalf of the vast
        variety of users the app is targeting. Considering the tight timeline we
        were given, the project was a success in providing a roadmap for their
        COVID-19 app.
      </p>
    </section>
  </div>
</template>

<script>
import Wireframe from '@/components/project/Wireframe';

export default {
  layout: 'project',
  components: {
    Wireframe,
  },
};
</script>

<style scoped></style>
