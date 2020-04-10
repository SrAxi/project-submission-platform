<template>
    <v-app>
        <SideMenu />
        <Header />
        
        <v-content>
            <v-container
                fluid
            >
                <router-view></router-view>
            </v-container>
        </v-content>
        
        <Footer />
    </v-app>
</template>

<script>
    import SideMenu from './components/SideMenu'
    import Header from './components/Header'
    import Footer from './components/Footer'

    export default {
        name: 'App',

        components: {
            Footer,
            SideMenu,
            Header,
        },

        data: () => ({
            // data
        })
    }
</script>
