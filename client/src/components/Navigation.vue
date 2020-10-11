<template>
    <v-card
            class="mx-auto overflow-hidden"
            height="400"
    >
        <Toolbar/>
        <Sidebar/>
    </v-card>
</template>

<script>
    import Toolbar from './Toolbar'
    import Sidebar from './Sidebar'

    export default {
        name: 'Navigation',

        components: {
            Toolbar,
            Sidebar
        }
    }
</script>

<style scoped>

</style>
