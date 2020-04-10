<template>
    <div class="text-center">
        <v-dialog
            v-model="confirmationDialog"
            width="500"
        >
            <v-card>
                <v-card-title
                    class="headline lighten-2"
                    primary-title
                >
                    {{title}}
                </v-card-title>
                
                <v-card-text>
                    {{text}}
                </v-card-text>
                
                <v-divider></v-divider>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="close"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="error"
                        @click="deleteProject"
                    >
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: 'ConfirmationModal',
        props: {
            confirmationDialog: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: 'Please confirm'
            },
            text: {
                type: String,
                default: ''
            },
            close: {
                type: Function,
            },
            deleteProject: {
                type: Function,
            },
        },
    }
</script>

<style scoped>

</style>