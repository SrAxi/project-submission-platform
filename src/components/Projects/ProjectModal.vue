<template>
    <v-dialog
        v-model="projectDialog"
        persistent
        max-width="700px"
    >
        <v-card>
            <v-card-title>
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            
            <v-card-text class="pb-0">
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="editedItem.name"
                                    :rules="projectNameRules"
                                    :counter="35"
                                    label="Project Name"
                                    outlined
                                    clearable
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="editedItem.created_by"
                                    :rules="nameRules"
                                    :counter="20"
                                    label="Your Name"
                                    outlined
                                    clearable
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="editedItem.email"
                                    :rules="emailRules"
                                    label="Your Email"
                                    outlined
                                    clearable
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="editedItem.office"
                                    :rules="officeRules"
                                    label="Your Office"
                                    outlined
                                    clearable
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-textarea
                                    v-model="editedItem.description"
                                    :counter="220"
                                    label="Description"
                                    :rules="descriptionRules"
                                    auto-grow
                                    outlined
                                    shaped
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-select
                                    v-model="editedItem.tech_stack"
                                    :items="technologies"
                                    label="Tech stack"
                                    multiple
                                    clearable
                                    outlined
                                >
                                    <template v-slot:selection="{ item }">
                                        <v-chip
                                            class="mr-1 my-1"
                                            :color="getColor(item)"
                                            dark>
                                            <span>{{ item }}</span>
                                        </v-chip>
                                    </template>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-select
                                    v-model="editedItem.rolesNeeded"
                                    :items="roles"
                                    item-text="name"
                                    item-value="id"
                                    label="Roles needed"
                                    multiple
                                    clearable
                                    outlined
                                >
                                    <template v-slot:selection="{ item }">
                                        <v-chip
                                            class="mr-1 my-1"
                                            color="primary"
                                            dark>
                                            <span>{{ getRoleName(item.id) }}</span>
                                        </v-chip>
                                    </template>
                                </v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
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
            getRoleName: {
                type: Function,
            },
            roles: {
                type: Array,
                default: () => ([])
            },
            technologies: {
                type: Array,
                default: () => ([])
            },
            getColor: {
                type: Function,
            },
            save: {
                type: Function,
            },
            close: {
                type: Function,
            },
        },
        data: () => ({
            valid: false,
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 20 || 'Name must be less than 20 characters',
            ],
            projectNameRules: [
                v => !!v || 'Project name is required',
                v => v.length <= 35 || 'Project name must be less than 35 characters',
            ],
            descriptionRules: [
                v => !!v || 'Description is required',
                v => v.length <= 220 || 'Description must be less than 220 characters',
            ],
            officeRules: [
                v => !!v || 'Office is required',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }),
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