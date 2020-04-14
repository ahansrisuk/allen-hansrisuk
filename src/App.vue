<template>
    <div id="app" class="p-4 h-screen flex-col max-w-lg m-auto">
        <div class="w-full" v-if="$route.path != '/'">
            <Header />
            <section class="flex">
                <Tab title="about" />
                <Tab title="works" class="ml-2" />
                <Tab title="contact" class="ml-2" />
            </section>
        </div>
        <router-view></router-view>
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
    }
}
</script>


