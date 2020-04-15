<template>
    <div class="tab-content">
        <Project 
            class="mb-4 block" 
            title="COVID-19 Tracker"
            path="/projects/covid-19-tracker"
            description="Mobile app to be implemented at Brigham and Women's Hospital to track provider 
            burnout and COVID-19 symptoms amid the outbreak."
            label="UX/UI Design"
        />
        <Project 
            class="mb-4 block" 
            title="Clear Cut"
            path="/projects/clear-cut"
            description="Web app developed for Johns Hopkins Medicine that automates routine 
            maintenance requests in Epic EMR"
            label="Development"
        />
        <Project 
            class="mb-4 block" 
            title="HAE Meds Workflow"
            path="/projects/hae-app"
            description="Expedite prescribing medication for hereditary angiodema patients."
            label="UX/UI Design"
        />
        <Project 
            class="mb-4 block" 
            title="Ready, Fresh Go!"
            path="/projects/ready-fresh-go"
            description="Case study and value proposition for a food truck related business and app intended
            to address food deserts in local communities."
            label="UX/UI Design"
        />
        <Project 
            class="mb-4 block" 
            title="Pocket Value"
            path="/projects/ready-fresh-go"
            description="Lightweight, item value reference guide for Animal Crossing: New Horizons."
            label="Development"
        />
        <Project 
            class="mb-4 block" 
            title="startpage"
            path="/projects/ready-fresh-go"
            description="Minimalist, custom start page for personal use. Displays time/date, weather,
            and frequently used bookmarks"
            label="UX/UI Design"
        />
    </div>
</template>

<script>

import Project from '../components/Project';


export default {
    name: 'Projects',
    components: { Project }
}
</script>

<style>
.tab-content {
    border-top-left-radius: 0;
}

</style>