<template>
    <div id="app" class="m-4 h-screen flex-col">
        <div class="w-full" v-if="$route.path != '/'">
            <Header />
            <section class="flex">
                <Tab title="about" />
                <Tab title="works" class="ml-4" />
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


