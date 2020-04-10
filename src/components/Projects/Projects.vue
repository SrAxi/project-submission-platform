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
            <template v-slot:item.rolesNeeded="{ item }">
                <v-chip
                    class="mr-1 mt-1"
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
            :save="save"
            :close="close"
        />
        <ViewProjectModal
            :viewDialog="viewDialog"
            :projectData="editedItem"
            :close="closeView"
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

    const mockRoles = [
        {
            id: 1,
            name: 'Backend engineer'
        },
        {
            id: 2,
            name: 'Frontend engineer'
        },
        {
            id: 3,
            name: 'Data Analyst'
        },
        {
            id: 4,
            name: 'ML expert'
        },
        {
            id: 5,
            name: 'Mobile engineer'
        },
        {
            id: 6,
            name: 'Full-stack engineer'
        },
        {
            id: 7,
            name: 'Marketing expert'
        },
        {
            id: 8,
            name: 'Product expert'
        },
    ]

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
            projects: [
                {
                    name: 'Project awesome 1',
                    created_by: 'Riccardo Polacci',
                    description: 'Such an awesome project, mainly FE stuff',
                    office: 'Dublin',
                    email: 'rpolacci@gorupon.com',
                    rolesNeeded: [1, 2, 8],
                    tech_stack: ['javascript', 'vue', 'vuetify'],
                },
                {
                    name: 'Project BE data',
                    created_by: 'John Doe',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    office: 'Seattle',
                    email: 'jdoe@gorupon.com',
                    rolesNeeded: [5, 6],
                    tech_stack: ['java', 'SQL', 'docker'],
                },
                {
                    name: 'Project awesome 420',
                    created_by: 'Bob Marley',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    office: 'Berlin',
                    email: 'bmarley@gorupon.com',
                    rolesNeeded: [7, 6],
                    tech_stack: ['react', 'redux', 'es6'],
                },
                {
                    name: 'No name project',
                    created_by: 'Elvis Presley',
                    description: 'Some random description for a random project',
                    office: 'Chicago',
                    email: 'epresley@gorupon.com',
                    rolesNeeded: [4, 5, 6],
                    tech_stack: ['c#', 'SQL', 'ML'],
                },
                {
                    name: 'New service for some functionality',
                    created_by: 'Michael Jackson',
                    description: 'Small description',
                    office: 'Seattle',
                    email: 'mjackson@gorupon.com',
                    rolesNeeded: [1, 2, 3, 4],
                    tech_stack: ['java', 'sql', 'docker', 'kubernetes'],
                },
                {
                    name: 'I dont know, actually',
                    created_by: 'Someone',
                    description: 'Its a mistery',
                    office: 'Warsaw',
                    email: 'someone@gorupon.com',
                    rolesNeeded: [1, 7],
                    tech_stack: ['python'],
                },
                {
                    name: 'No name project 2',
                    created_by: 'Elvis Presley 2',
                    description: 'Some random description for a random project',
                    office: 'Madrid',
                    email: 'epresley2@gorupon.com',
                    rolesNeeded: [1, 2, 3, 4, 5],
                    tech_stack: ['c#', 'SQL', 'ML'],
                },
                {
                    name: 'New service for some functionality 2',
                    created_by: 'Michael Jackson 2',
                    description: 'Small description',
                    office: 'Bangalore',
                    email: 'mjackson2@gorupon.com',
                    rolesNeeded: [1, 2],
                    tech_stack: ['java', 'sql', 'docker', 'kubernetes'],
                },
                {
                    name: 'I dont know, actually',
                    created_by: 'Someone',
                    description: 'Its a mistery',
                    office: 'Bangalore',
                    email: 'someone2@gorupon.com',
                    rolesNeeded: [1],
                    tech_stack: ['python'],
                },
                {
                    name: 'No name project 3',
                    created_by: 'Elvis Presley 3',
                    description: 'Some random description for a random project',
                    office: 'Dublin',
                    email: 'epresley3@gorupon.com',
                    rolesNeeded: [1, 4],
                    tech_stack: ['c#', 'SQL', 'ML'],
                },
                {
                    name: 'New service for some functionality 3',
                    created_by: 'Michael Jackson 3',
                    description: 'Small description',
                    office: 'London',
                    email: 'mjackson3@gorupon.com',
                    rolesNeeded: [1, 2, 6],
                    tech_stack: ['java', 'sql', 'docker', 'kubernetes'],
                },
                {
                    name: 'I dont know, actually 3',
                    created_by: 'Someone 3',
                    description: 'Its a mistery',
                    office: 'Dublin',
                    email: 'someone3@gorupon.com',
                    rolesNeeded: [1, 2],
                    tech_stack: ['python'],
                },
                {
                    name: 'No name project 4',
                    created_by: 'Elvis Presley 4',
                    description: 'Some random description for a random project',
                    office: 'Bangalore',
                    email: 'epresley4@gorupon.com',
                    rolesNeeded: [5, 6, 4],
                    tech_stack: ['c#', 'SQL', 'ML'],
                },
                {
                    name: 'New service for some functionality 4',
                    created_by: 'Michael Jackson 4',
                    description: 'Small description',
                    office: 'Seattle',
                    email: 'mjackson4@gorupon.com',
                    rolesNeeded: [1, 2],
                    tech_stack: ['java', 'sql', 'docker', 'kubernetes'],
                },
                {
                    name: 'I dont know, actually 4',
                    created_by: 'Someone 4',
                    description: 'Its a mistery',
                    office: 'Dublin',
                    email: 'someone4@gorupon.com',
                    rolesNeeded: [1, 2],
                    tech_stack: ['python'],
                },
            ],
            roles: mockRoles,
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