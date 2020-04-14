<template>
    <div>

        <h3 class="mb-2">
            <button @click="show = !show">{{ title }}</button>
        </h3>
        <p v-show="show">
            {{ description }}
            <router-link :to="path">-></router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: ['title', 'path', 'description'],
    data: function () {
        return {
            show: false
        }
    }
}
</script>

<style>

</style>