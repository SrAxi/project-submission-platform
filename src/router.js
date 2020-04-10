import VueRouter from 'vue-router'

import ProjectsView from './views/ProjectsView'
import ToolsView from './views/ToolsView'
import TipsView from './views/TipsView'
import SupportView from './views/SupportView'

export const PATHS = {
    PROJECTS: '/projects',
    PARTICIPANTS: '/participants',
    TOOLS: '/tools',
    TIPS_AND_IDEAS: '/tips-and-ideas',
    SUPPORT: '/support',
}

const routes = [
    { path: '', redirect: PATHS.PROJECTS },
    { path: PATHS.PROJECTS, component: ProjectsView },
    { path: PATHS.TOOLS, component: ToolsView },
    { path: PATHS.TIPS_AND_IDEAS, component: TipsView },
    { path: PATHS.SUPPORT, component: SupportView },
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})
