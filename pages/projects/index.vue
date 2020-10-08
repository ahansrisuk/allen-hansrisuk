<template>
  <div>
    <Project
      title="COVID-19 Tracker"
      category="Product Design"
      link="/projects/covid-19-tracker"
    >
      Mobile app to be implemented at Brigham and Women's Hospital to track
      provider burnout and COVID-19 symptoms amid the outbreak.
    </Project>
    <Project
      title="Pocket Value"
      category="Development"
      link="/projects/pocket-value"
    >
      Lightweight, item value reference guide for Animal Crossing: New Horizons.
      Featured as a
      <a
        href="https://www.reddit.com/r/webdev/comments/gbhsgg/for_those_bitten_by_the_animal_crossing_bug_i/"
        target="_blank"
        class="underline"
        >top post</a
      >
      on Reddit's /r/webdev community.
    </Project>
    <Project
      title="Ready, Fresh, Go!"
      category="Product Design"
      link="/projects/ready-fresh-go"
    >
      Case study and value proposition for a food truck business model and app
      intended to address food deserts and build community.
    </Project>
    <Project
      title="Clear Cut"
      category="Development"
      link="https://www.dropbox.com/s/5ba5hnyi1mv93zc/Clear%20Cut%20Maintenance%20Request%20System%20for%20Johns%20Hopkins%20Medicine.docx?dl=0"
      :external-link="true"
    >
      Web app developed for Johns Hopkins Medicine that automates routine
      maintenance requests in Epic EMR.
    </Project>
    <Project
      title="HAE Meds Workflow"
      category="Product Design"
      link="/contact"
    >
      Expedite prescribing medication for hereditary angiodema patients. Please
      contact me for additional information regarding this project.
    </Project>
  </div>
</template>

<script>
import Project from '@/components/Project';

export default {
  name: 'Projects',
  components: { Project },
  head() {
    return {
      title: 'Projects | Allen Hansrisuk',
    };
  },
};
</script>

<style></style>
