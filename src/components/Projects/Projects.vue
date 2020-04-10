<template>
    <v-card>
        <v-card-title>
            Projects
            <v-spacer />
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <v-spacer />
            <v-btn
                color="primary"
                dark
                class="mb-2"
                @click="projectDialog = true"
            >
                <v-icon left>add_circle_outline</v-icon>
                Add project
            </v-btn>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="projects"
            :search="search"
            :loading="loading"
        >
            <template v-slot:item.description="{ item }">
                {{ truncate(item.description) }}
            </template>
            <template v-slot:item.tech_stack="{ item }">
                <v-chip
                    class="mr-1 my-1"
                    v-for="tech in item.tech_stack"
                    :key="tech"
                    :color="getColor(tech)"
                    dark>
                    {{ tech }}
                </v-chip>
            </template>
            <template v-slot:item.rolesNeeded="{ item }">
                <v-chip
                    class="mr-1 my-1"
                    v-for="roleId in item.rolesNeeded"
                    :key="roleId"
                    color="primary"
                    dark>
                    {{ getRoleName(roleId) }}
                </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-icon
                        class="mr-2"
                        title="View project"
                        @click="viewItem(item)"
                    >
                        remove_red_eye
                    </v-icon>
                    <v-icon
                        class="mr-2"
                        title="Edit project"
                        @click="editItem(item)"
                    >
                        edit
                    </v-icon>
                    <v-icon
                        title="Delete project"
                        @click="deleteItem(item)"
                    >
                        delete
                    </v-icon>
                </v-row>
            </template>
            <template v-slot:no-data>
                <h2>There are no projects yet... Be the first!</h2>
            </template>
        </v-data-table>
        
        <ProjectModal
            :projectDialog="projectDialog"
            :editedItem="editedItem"
            :defaultItem="defaultItem"
            :editedIndex="editedIndex"
            :getRoleName="getRoleName"
            :roles="roles"
            :getColor="getColor"
            :technologies="technologies"
            :save="save"
            :close="close"
        />
        <ViewProjectModal
            :viewDialog="viewDialog"
            :projectData="editedItem"
            :close="closeView"
            :getRoleName="getRoleName"
        />
        <ConfirmationModal
            :confirmationDialog="confirmationDialog"
            :close="closeConfirmation"
            :text="confirmationText"
            :deleteProject="confirmationDelete"
        />
    </v-card>
</template>

<script>
    import { getTechColor, truncateString } from '../../utils/utils'
    import ProjectModal from './ProjectModal'
    import ViewProjectModal from './ViewProjectModal'
    import ConfirmationModal from '../ConfirmationModal'
    import { getProjects, getRoles } from './mockBackend'

    export default {
        name: 'Projects',
        components: {
            ViewProjectModal,
            ProjectModal,
            ConfirmationModal
        },
        data: () => ({
            search: '',
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    value: 'name',
                },
                {
                    text: 'Created by',
                    value: 'created_by',
                },
                {
                    text: 'Email',
                    value: 'email',
                },
                {
                    text: 'Office',
                    value: 'office',
                },
                {
                    text: 'Description',
                    value: 'description',
                    sortable: false,
                },
                {
                    text: 'Tech stack',
                    value: 'tech_stack',
                    sortable: false,
                },
                {
                    text: 'Roles needed',
                    value: 'rolesNeeded',
                    sortable: false,
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false,
                    width: '8rem'
                },
            ],
            projects: [],
            roles: [],
            technologies: [
                'python',
                'javascript',
                'java',
                'sql',
                'vue',
                'react',
                'docker',
                'kubernetes',
                'c#',
                'c++',
                'angular',
            ],
            loading: false,
            projectDialog: false,
            viewDialog: false,
            confirmationDialog: false,
            confirmationText: '',
            confirmationDelete: Function,
            editedIndex: -1,
            editedItem: {
                name: '',
                created_by: '',
                description: '',
                email: '',
                office: '',
                tech_stack: [],
                rolesNeeded: [],
            },
            defaultItem: {
                name: '',
                created_by: '',
                description: '',
                email: '',
                office: '',
                tech_stack: [],
                rolesNeeded: [],
            },
        }),
        mounted() {
            this.loading = true
            // TODO: Use Axios with an actual API endpoint
            Promise.all([getProjects(), getRoles()])
                .then(([projects, roles]) => {
                    this.projects = projects.data
                    this.roles = roles.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => this.loading = false)
        },
        methods: {
            getColor(tech) {
                return getTechColor(tech)
            },
            getRoleName(id) {
                return this.roles.find(role => role.id === id).name || ''
            },
            truncate(description) {
                return truncateString(description)
            },
            viewItem(item) {
                this.editedIndex = this.projects.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.viewDialog = true
            },
            editItem(item) {
                this.editedIndex = this.projects.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.projectDialog = true
            },
            deleteItem(item) {
                const index = this.projects.indexOf(item)
                this.confirmationText = 'Are you sure you want to delete this project?'
                this.confirmationDialog = true
                this.confirmationDelete = () => {
                    this.projects.splice(index, 1)
                    this.closeConfirmation()
                }
            },
            close() {
                this.projectDialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },
            closeView() {
                this.viewDialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },
            closeConfirmation() {
                this.confirmationDialog = false
            },
            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.projects[this.editedIndex], this.editedItem)
                } else {
                    this.projects.push(this.editedItem)
                }
                this.close()
            },
        },
    }
</script>

<style scoped>
</style>