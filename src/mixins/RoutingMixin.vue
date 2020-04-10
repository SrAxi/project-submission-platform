<script>
    import { PATHS } from '../router'

    export default {
        name: 'RoutingMixin',
        computed: {
            projectsIsActive() {
                return this.$route.path === PATHS.PROJECTS
            },
            participantsIsActive() {
                return this.$route.path === PATHS.PARTICIPANTS
            },
            toolsIsActive() {
                return this.$route.path === PATHS.TOOLS
            },
            tipsAndIdeasIsActive() {
                return this.$route.path === PATHS.TIPS_AND_IDEAS
            },
            supportIsActive() {
                return this.$route.path === PATHS.SUPPORT
            },
        },
        methods: {
            navigateTo(path) {
                if (this.$route.path !== path) {
                    this.$router.push({ path })
                }
            },
            goToProjects() {
                this.navigateTo(PATHS.PROJECTS)
            },
            goToParticipants() {
                this.navigateTo(PATHS.PARTICIPANTS)
            },
            goToTools() {
                this.navigateTo(PATHS.TOOLS)
            },
            goToTipsAndIdeas() {
                this.navigateTo(PATHS.TIPS_AND_IDEAS)
            },
            goToSupport() {
                this.navigateTo(PATHS.SUPPORT)
            },
        }
    }
</script>
