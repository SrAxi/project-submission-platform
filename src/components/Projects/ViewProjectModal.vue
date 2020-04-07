<template>
    <v-dialog
        v-model="viewDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="close">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>{{projectData.name}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="close">Close</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-list three-line subheader>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Name</v-list-item-title>
                        <v-list-item-subtitle>{{projectData.name}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Created by</v-list-item-title>
                        <v-list-item-subtitle>{{projectData.created_by}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list three-line subheader>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Description</v-list-item-title>
                        <v-list-item-subtitle>{{projectData.description}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list three-line subheader>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Tech stack</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-chip
                                class="mr-1 mt-1"
                                v-for="tech in projectData.tech_stack"
                                :key="tech"
                                :color="getColor(tech)"
                                dark>
                                {{ tech }}
                            </v-chip>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-dialog>
</template>

<script>
    import { getTechColor } from '../../utils/utils'

    export default {
        name: 'ViewProjectModal',
        props: {
            viewDialog: {
                type: Boolean,
                default: false
            },
            projectData: {
                type: Object,
                default: () => ({}),
            },
            close: {
                type: Function,
            },
        },
        watch: {
            viewDialog(val) {
                val || this.close()
            },
        },
        methods: {
            getColor(tech) {
                return getTechColor(tech)
            },
        },
    }
</script>

<style scoped>

</style>