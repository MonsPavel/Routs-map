<template>
    <v-app>
        <v-main>
            <Toolbar></Toolbar>
            <div class="main-content">
                <Sidebar></Sidebar>
                <router-view></router-view>
            </div>
        </v-main>
    </v-app>
</template>

<script>
    import Toolbar from './components/Toolbar'
    import Sidebar from './components/Sidebar'

    export default {
        name: 'App',

        components: {
            Toolbar,
            Sidebar
        },

        data: () => ({
            //
        }),
    };
</script>

<style lang="sass">
    .main-content
        display: flex
        height: calc(100vh - 64px)
</style>
