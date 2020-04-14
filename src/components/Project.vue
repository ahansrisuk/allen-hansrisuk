<template>
    <div>
        <h3 class="mb-2 flex justify-between text-center">
            <button class="focus:outline-none" @click="show = !show">{{ title }}</button>
            <transition @enter="labelEnter" @leave="labelLeave" :css="false">
                <span v-show="show">({{ label }})</span>
            </transition>
        </h3>
        <transition @enter="descriptionEnter" @leave="descriptionLeave" :css="false">
            <p v-show="show">
                <router-link :to="path">
                    {{ description }} ->
                </router-link>
            </p>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: ['title', 'path', 'description', 'label'],
    data: function () {
        return {
            show: false
        }
    },
    methods: {
        labelEnter(el, done) {
            this.$anime({
                targets: el,
                opacity: 1,
                translateX: [-100, 0],
                easing: 'easeInOutSine',
                duration: 300,
                complete: done
            });
        },
        labelLeave(el, done) {
            this.$anime({
                targets: el,
                opacity: 0,
                translateX: -100,
                easing: 'easeInOutSine',
                duration: 200,
                complete: done
            });
        },
        descriptionEnter(el, done) {
            this.$anime({
                targets: el,
                'max-height': ['0px', '800px'],
                easing: 'easeInOutSine',
                duration: 500,
                complete: done
            });
        },
        descriptionLeave(el, done) {
            this.$anime({
                targets: el,
                'max-height': 0,
                easing: 'easeInOutSine',
                duration: 300,
                complete: done
            });
        }
    }
}
</script>

<style>

</style>