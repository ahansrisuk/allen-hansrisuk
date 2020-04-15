<template>
    <div class="bwh-font bg-light font-bold w-full absolute left-0 top-0 p-4 ">
        <div class="max-w-2xl m-auto overflow-auto">
            <router-link to="/projects" class="text-black font-bold code">&lt;- Back</router-link>
            <section class="rounded blue p-2 mt-8 text-white">
                <h1 class="text-xl font-bold">COVID-19 Tracker</h1>
                <span class="text-sm">UX/UI Design - Wireframing & Prototypes</span>
            </section>
            <section class="mt-4 pb-4 shadow-lg bg-gray-100 rounded">
                <h2 class="underline blue text-white rounded p-1 pl-2 font-bold">Background</h2>
                <p class="p-2">
                    In the midst of the COVID-19 outbreak, Brigham and Women's Hospital in Boston, MA wanted to 
                    explore a solution that would help contain the spread of COVID-19 and benefit the healthcare
                    workers on the frontlines. 
                </p>
            </section>
            <section class="mt-4 pb-4 shadow-lg bg-gray-100 rounded">
                <h2 class="underline blue text-white rounded p-1 pl-2 font-bold">Requirements</h2>
                <ul class="p-2">
                    <li>- Mobile app solution</li>
                    <li>- Mechanism to track provider burnout.</li>
                    <li>- Mechanism to report any symptoms related to COVID-19.</li>
                    <li>- Notifications for hospital protocol.</li>
                </ul>
            </section>
            <section class="mt-4 pb-4 shadow-lg bg-gray-100 rounded">
                <h2 class="underline blue text-white rounded p-1 pl-2 font-bold">Ideation</h2>
                <img src="../../assets/covid-19-tracker/sketches.png" alt="COVID-19 Tracker Sketches" />
                <p class="p-2">
                    Original sketches that outline the home screen, provider burnout interface and 
                    COVID-19 symptoms interface. 
                </p>
            </section>
            <section class="mt-4 pb-4 shadow-lg bg-gray-100 rounded">
                <h2 class="underline blue text-white rounded p-1 pl-2 font-bold">Notification Screens</h2>
                <img src="../../assets/covid-19-tracker/notifications.png" alt="COVID-19 Notifications"  class="p-2"/>
                <p class="p-2">
                    Notifications to alert the user about recent news articles pertaining to the hospital, reminders
                    to report symptoms and well-being, and hospital protocol updates. 
                </p>
            </section>
            <section class="mt-4 pb-4 shadow-lg bg-gray-100 rounded">
                <h2 class="underline blue text-white rounded p-1 pl-2 font-bold">Wireframes</h2>
                <img src="../../assets/covid-19-tracker/wireframes.png" alt="COVID-19 Tracker Wireframes"  class="p-2"/>
                <p class="p-2">
                    Wireframes and prototype demonstrating user potential user journeys to hospital
                    stakeholders. 
                </p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'COVID19Tracker'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
.bwh-font {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
}

.blue {
    background-color: #012D5A; 
}
</style>