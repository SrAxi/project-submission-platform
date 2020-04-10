<template>
    <v-navigation-drawer
        app
        clipped
        dark
    >
        <v-list dense>
            <v-list-item @click="goToProjects">
                <v-list-item-action>
                    <v-icon color="green">dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Projects</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="() => null">
                <v-list-item-action>
                    <v-icon>group</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Participants</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="goToTools">
                <v-list-item-action>
                    <v-icon>build</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Tools</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="goToTipsAndIdeas">
                <v-list-item-action>
                    <v-icon>emoji_objects</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Tips and Ideas</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="goToSupport">
                <v-list-item-action>
                    <v-icon>help_outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Support</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import RoutingMixin from '../mixins/RoutingMixin'

    export default {
        name: 'SideMenu',
        mixins: [RoutingMixin]
    }
</script>

<style scoped>

</style>