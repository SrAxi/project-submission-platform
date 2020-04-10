<template>
    <v-dialog
        v-model="projectDialog"
        persistent
        max-width="600px"
    >
        <v-card>
            <v-card-title>
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.name" label="Project Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.created_by" label="Your Name"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.tech_stack" label="Tech stack"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="primary darken-1" @click="save">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'ProjectModal',
        props: {
            projectDialog: {
                type: Boolean,
                default: false
            },
            editedItem: {
                type: Object,
                default: () => ({}),
            },
            editedIndex: {
                type: Number,
                default: -1,
            },
            save: {
                type: Function,
            },
            close: {
                type: Function,
            },
        },
        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Project' : 'Edit Project'
            },
        },
        watch: {
            projectDialog(val) {
                val || this.close()
            },
        },
    }
</script>

<style scoped>

</style>