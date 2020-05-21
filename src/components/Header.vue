<template>
    <v-app-bar
        app
        clipped-left
    >
        <v-toolbar-title>
            <h1 class="logo" @click="goToProjects">Project Submission Platform 2020</h1>
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
    import RoutingMixin from '../mixins/RoutingMixin'

    export default {
        name: 'Header',
        mixins: [RoutingMixin]
    }
</script>

<style scoped>
    .logo:hover {
        cursor: pointer;
    }
</style>