<template>
    <v-app>
        <SideMenu />
        <Header />
        
        <v-content>
            <v-container
                fluid
            >
                <Projects />
            </v-container>
        </v-content>
        
        <Footer />
    </v-app>
</template>

<script>
    import SideMenu from './components/SideMenu'
    import Header from './components/Header'
    import Footer from './components/Footer'
    import Projects from './components/Projects/Projects'

    export default {
        name: 'App',

        components: {
            Footer,
            Projects,
            SideMenu,
            Header,
        },

        data: () => ({
            // data
        })
    }
</script>
