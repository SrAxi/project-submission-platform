<script>
    import { PATHS } from '../router'

    export default {
        name: 'RoutingMixin',
        methods: {
            navigateTo(path) {
                if (this.$router.currentRoute.path !== path) {
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
