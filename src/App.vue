<template>
    <div id="app" 
        class="p-4 h-screen flex-col w-full"
        :class="globalStyles"
        >
        <div class="max-w-lg m-auto">
            <div v-if="onCoreRoute">
                <Header />
                <section class="flex">
                    <Tab title="about" />
                    <Tab title="projects" class="ml-2" />
                    <Tab title="contact" class="ml-2" />
                </section>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import Header from './components/Header';
import Tab from './components/Tab';

export default {
    name: 'App',
    components: {
        Header,
        Tab
    },
    computed: {
        onCoreRoute () {
            let path = this.$route.path
            return (
                path == '/about' ||
                path == '/projects' ||
                path == '/contact' 
            )
        },
        globalStyles () {
            if (this.onCoreRoute || this.$route.path == '/') {
                return 'bg-black text-white'
            } else {
                return 'bg-light text-black font-medium'
            }
        }

    }
}
</script>


