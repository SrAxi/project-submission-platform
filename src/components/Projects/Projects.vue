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
                @click="dialog = true"
            >
                <v-icon left>add_circle_outline</v-icon>
                Add project
            </v-btn>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="projects"
            :search="search"
        >
            <template v-slot:item.description="{ item }">
                {{ truncate(item.description) }}
            </template>
            <template v-slot:item.tech_stack="{ item }">
                <v-chip
                    class="mr-1 mt-1"
                    v-for="tech in item.tech_stack"
                    :key="tech"
                    :color="getColor(tech)"
                    dark>
                    {{ tech }}
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
                        @click="editItem(item)"
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
            :dialog="dialog"
            :editedItem="editedItem"
            :defaultItem="defaultItem"
            :editedIndex="editedIndex"
            :save="save"
            :close="close"
        />
    </v-card>
</template>

<script>
    import { getTechColor, truncateString } from '../../utils/utils'
    import ProjectModal from './ProjectModal'

    export default {
        name: 'Projects',
        components: { ProjectModal },
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
                    text: 'Actions',
                    value: 'actions',
                    sortable: false,
                    width: '8rem'
                },
            ],
            projects: [
                {
                    name: 'Project awesome 1',
                    created_by: 'Riccardo Polacci',
                    description: 'Such an awesome project, mainly FE stuff',
                    tech_stack: ['javascript', 'vue', 'vuetify'],
                },
                {
                    name: 'Project BE data',
                    created_by: 'John Doe',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    tech_stack: ['java', 'SQL', 'docker'],
                },
                {
                    name: 'Project awesome 420',
                    created_by: 'Bob Marley',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    tech_stack: ['react', 'redux', 'es6'],
                },
                {
                    name: 'No name project',
                    created_by: 'Elvis Presley',
                    description: 'Some random description for a random project',
                    tech_stack: ['c#', 'SQL', 'ML'],
                },
                {
                    name: 'New service for some functionality',
                    created_by: 'Michael Jackson',
                    description: 'Small description',
                    tech_stack: ['java', 'sql', 'docker', 'kubernetes'],
                },
                {
                    name: 'I dont know, actually',
                    created_by: 'Someone',
                    description: 'Its a mistery',
                    tech_stack: ['python'],
                },
                {
                    name: 'No name project',
                    created_by: 'Elvis Presley',
                    description: 'Some random description for a random project',
                    tech_stack: ['c#', 'SQL', 'ML'],
                },
                {
                    name: 'New service for some functionality',
                    created_by: 'Michael Jackson',
                    description: 'Small description',
                    tech_stack: ['java', 'sql', 'docker', 'kubernetes'],
                },
                {
                    name: 'I dont know, actually',
                    created_by: 'Someone',
                    description: 'Its a mistery',
                    tech_stack: ['python'],
                },
                {
                    name: 'No name project',
                    created_by: 'Elvis Presley',
                    description: 'Some random description for a random project',
                    tech_stack: ['c#', 'SQL', 'ML'],
                },
                {
                    name: 'New service for some functionality',
                    created_by: 'Michael Jackson',
                    description: 'Small description',
                    tech_stack: ['java', 'sql', 'docker', 'kubernetes'],
                },
                {
                    name: 'I dont know, actually',
                    created_by: 'Someone',
                    description: 'Its a mistery',
                    tech_stack: ['python'],
                },
                {
                    name: 'No name project',
                    created_by: 'Elvis Presley',
                    description: 'Some random description for a random project',
                    tech_stack: ['c#', 'SQL', 'ML'],
                },
                {
                    name: 'New service for some functionality',
                    created_by: 'Michael Jackson',
                    description: 'Small description',
                    tech_stack: ['java', 'sql', 'docker', 'kubernetes'],
                },
                {
                    name: 'I dont know, actually',
                    created_by: 'Someone',
                    description: 'Its a mistery',
                    tech_stack: ['python'],
                },
            ],
            dialog: false,
            editedIndex: -1,
            editedItem: {
                name: '',
                created_by: '',
                description: '',
                tech_stack: [],
            },
            defaultItem: {
                name: '',
                created_by: '',
                description: '',
                tech_stack: [],
            },
        }),
        methods: {
            getColor(tech) {
                return getTechColor(tech)
            },
            truncate(description) {
                return truncateString(description)
            },
            editItem(item) {
                this.editedIndex = this.projects.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                const index = this.projects.indexOf(item)
                confirm('Are you sure you want to delete this project?') && this.projects.splice(index, 1)
            },

            close() {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
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