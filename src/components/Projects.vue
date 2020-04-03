<template>
    <v-card>
        <v-card-title>
            Projects
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="projects"
            :search="search"
        >
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
        </v-data-table>
    </v-card>
</template>

<script>
    import { getTechColor } from '../utils/utils'

    export default {
        name: 'Projects',
        data: () => ({
            search: '',
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Created by', value: 'created_by' },
                { text: 'Description', value: 'description' },
                { text: 'Tech stack', value: 'tech_stack' },
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
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                }, {
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
                }, {
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
                }, {
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
        }),
        methods: {
            getColor(tech) {
                return getTechColor(tech)
            },
        },
    }
</script>

<style scoped>

</style>