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

const projects = [
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
]

export const getProjects = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve({data: projects})
    }, 1000)
})

export const getRoles = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve({data: mockRoles})
    }, 600)
})

