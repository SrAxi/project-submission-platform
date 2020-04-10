<template>
    <v-app-bar
        app
        clipped-left
    >
        <v-toolbar-title>
            <h1 class="geekon-logo" @click="goToProjects">Geekon 2020</h1>
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
    .geekon-logo:hover {
        cursor: pointer;
    }
</style>