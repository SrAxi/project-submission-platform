<template>
    <v-navigation-drawer
        app
        clipped
        dark
    >
        <v-list dense>
            <v-list-item @click="() => console.log('v-list-item1 clicked')">
                <v-list-item-action>
                    <v-icon color="green">dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Projects</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="() => console.log('v-list-item2 clicked')">
                <v-list-item-action>
                    <v-icon>group</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Participants</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="() => console.log('v-list-item2 clicked')">
                <v-list-item-action>
                    <v-icon>build</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Tools</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="() => console.log('v-list-item1 clicked')">
                <v-list-item-action>
                    <v-icon>emoji_objects</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Tips and Ideas</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="() => console.log('v-list-item2 clicked')">
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
    export default {
        name: 'SideMenu'
    }
</script>

<style scoped>

</style>