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
        <router-link to="/" class="mb-4 block">Heteroangiodema App</router-link>
        <router-link to="/" class="mb-4 block">Ready, Fresh, Go!</router-link>
        <router-link to="/" class="mb-4 block">Pocket Value</router-link>
        <router-link to="/" class="mb-4 block">startpage</router-link>
        <router-link to="/" class="block">Kimberly Kemler</router-link>
    </div>
</template>

<script>

import Project from '../components/Project'

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