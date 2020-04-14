<template>
    <div class="tab-content">
        <Project 
            class="mb-4 block" 
            title="COVID-19 Tracker"
            path="/projects/covid-19-tracker"
            description="Wireframing and prototyping for an application to be implemented at 
            Brigham and Women's Hospital. The application will serve as a tool to track provider 
            burnout and COVID-19 symptoms amid the outbreak."
        />
            
        <router-link to="/" class="mb-4 block">Clear Cut</router-link>
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