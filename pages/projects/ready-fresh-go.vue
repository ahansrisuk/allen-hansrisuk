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
          src="@/assets/ready-fresh-go/RFG1.png"
          alt="wireframe 1"
          class="w-full"
        />
      </div>
      <div class="w-24 sm:w-48 md:w-56">
        <img
          src="@/assets/ready-fresh-go/RFG2.png"
          alt="wireframe 2"
          class="w-full"
        />
      </div>
      <div class="w-24 sm:w-48 md:w-56">
        <img
          src="@/assets/ready-fresh-go/RFG3.png"
          alt="wireframe 3"
          class="w-full"
        />
      </div>
    </div>
    <section class="mb-12">
      <h2 class="text-xl">Background/Problem</h2>
      <hr />
      <p class="my-4">
        Food deserts in the United States is often an overlooked issue that has
        tremendeous effects on citizens' diets and health. In Michelle Obama’s
        speech in 2010 as part of her Let's Move! campaign, she covered issues
        including child health and nutrition. She also addressed "23.5 million
        Americans who live in areas without supermarkets or other places where
        they can access fresh, nutritious foods". As a result, Americans who
        live in these areas are more susceptible to diet related illnesses and
        poor habits relating to nutrition.
      </p>
      <p class="my-4">
        Our team was tasked with exploring a potential solution that could
        address food deserts and build community. Our final deliverable to the
        client was a complete playbook documenting our process, design
        decisions, wireframes, and prototype.
      </p>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Project Timeline</h2>
      <hr />
      <p class="my-4">
        Our project spanned six weeks and we followed the Agile Scrum method to
        prioritize our tasks and divide the work.
      </p>
      <div class="flex justify-center">
        <img
          src="@/assets/ready-fresh-go/project-plan.png"
          alt="project plan"
        />
      </div>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Research</h2>
      <hr />
      <p class="my-4">
        We started researching this issue through peer reviewed journal articles
        to better understand what criteria makes an area a food desert as well
        as what known problems do people in these areas already encounter.
        Although the main demographic we were targeting were users who live in
        food deserts, we wanted to open up our research to all users in order to
        understand their grocery shopping and eating habits. This was done via
        online survey and eight survey responders were contacted for a follow up
        interview.
      </p>
      <p class="my-4">
        Key Takeaways
      </p>
      <ul class="list-disc ml-4">
        <li>
          Most participants expressed pain points with grocery shopping and
          food-ordering or takeout methods.
        </li>
        <li>
          Some participants resort to online ordering for grocery shopping when
          they couldn’t find what they’re looking for and that 5 out of 8
          participants use food-delivery apps to get their food (takeout).
        </li>
        <li>
          Most participants prefer to go to the closest grocery store
          (additional or secondary reasons: quality and cultural preference).
          For those who own a car, they’re willing to drive further to go to
          another store.
        </li>
        <li>
          Most participants are health conscious, meaning they aware of what
          they eat and try to eat healthier options. Some participants also
          follow dietary plans (low-carb, vegetarian).
        </li>
      </ul>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Persona and Journey Map</h2>
      <hr />
      <p class="my-4">
        Jack Karter was one of the personas created based on our research data
        to illustrate a potential user and their journey through buying food.
      </p>
      <div class="mb-4">
        <img
          src="@/assets/ready-fresh-go/persona.png"
          alt="task flow diagram"
        />
      </div>
      <div>
        <img
          src="@/assets/ready-fresh-go/journey-map.png"
          alt="task flow diagram"
        />
      </div>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Solution/Task Flow</h2>
      <hr />
      <div class="my-4">
        <img
          src="@/assets/ready-fresh-go/wireflow.png"
          alt="task flow diagram"
        />
      </div>
      <p class="my-4">
        Our solution, Ready, Fresh, Go! is a two-pronged approach. To build
        community and help address the food desert issue, the solution makes use
        of a traveling farmer’s market, similar to a traditional food truck,
        that travels from neighborhood to neighborhood on a recurring schedule.
        Each neighborhood has its associated time and place where the market
        will be. Good sold will come from local sources furthe strengthening
        community ties. The second part of our solution lies in the accompanying
        mobile app. From the app, users can set their default pickup location,
        order their groceries, see what the market has in store, and pay. The
        task flow (pictured above) outlined the features and the users’
        processes for our app. Later, we designed the wireframes, which later on
        informed our prototype.
      </p>
      <div class="my-4">
        <img
          src="@/assets/ready-fresh-go/annotated-wireframe.png"
          alt="task flow diagram"
        />
      </div>
      <p class="my-4">
        Pictured above is an early sketch representing the Browse Items screen.
      </p>
    </section>
    <section class="mb-12">
      <h2 class="text-xl">Wireframing</h2>
      <hr />
      <p class="my-4">
        Our project spanned six weeks and we followed the Agile Scrum method to
        prioritize our tasks and divide the work.
      </p>
      <div class="flex justify-center">
        <img src="@/assets/ready-fresh-go/wireframes1.png" alt="wireframes" />
      </div>
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
