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
    import Projects from './components/Projects'
    import Footer from './components/Footer'

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
