<template>
  <div>
    <Project
      class="mb-4 block"
      title="COVID-19 Tracker"
      path="/projects/covid-19-tracker"
      label="UX/UI Design"
    >
      <router-link to="/projects/covid-19-tracker"
        >Mobile app to be implemented at Brigham and Women's Hospital to track
        provider burnout and COVID-19 symptoms amid the outbreak.
        <span class="underline">More information</span> ->
      </router-link>
    </Project>
    <Project class="mb-4 block" title="Clear Cut" label="Development">
      Web app developed for Johns Hopkins Medicine that automates routine
      maintenance requests in Epic EMR. Please contact me for additional
      information regarding this project.
      <a
        href="https://www.dropbox.com/s/5ba5hnyi1mv93zc/Clear%20Cut%20Maintenance%20Request%20System%20for%20Johns%20Hopkins%20Medicine.docx?dl=0"
        class="underline"
        >Link to Case Study</a
      >
      ->
    </Project>
    <Project class="mb-4 block" title="HAE Meds Workflow" label="UX/UI Design">
      Expedite prescribing medication for hereditary angiodema patients. Please
      contact me for additional information regarding this project.
    </Project>
    <Project class="mb-4 block" title="Ready, Fresh, Go!" label="UX/UI Design">
      Case study and value proposition for a food truck related business and app
      intended to address food deserts in local communities.
      <a
        href="https://www.dropbox.com/s/rqxtmd8554fbfog/ready-fresh-go-playbook.pdf?dl=0"
        class="underline"
        >Link to Playbook</a
      >
      ->
    </Project>
    <Project class="mb-4 block" title="Pocket Value" label="Development">
      Lightweight, item value reference guide for Animal Crossing: New Horizons.
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
    </Project>
    <Project
      class="mb-4 block"
      title="startpage"
      path="/projects/startpage"
      label="UX/UI Design"
      >Minimalist, custom start page for personal use. Displays time/date,
      weather, and frequently used bookmarks.
      <a
        href="https://github.com/ahansrisuk/startpage"
        target="_blank"
        class="underline"
        >Source Code</a
      >
      ->
    </Project>
  </div>
</template>

<script>
import Project from '../components/Project';

export default {
  name: 'Projects',
  components: { Project },
};
</script>

<style>
.tab-content {
  border-top-left-radius: 0;
}
</style>
