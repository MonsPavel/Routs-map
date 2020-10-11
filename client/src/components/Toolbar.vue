<template>
    <v-app-bar
            color="indigo"
            dark
    >
        <v-app-bar-nav-icon @click.stop="toggleSidebar"></v-app-bar-nav-icon>
    </v-app-bar>
</template>

<script>
    import { TOGGLE_SIDEBAR } from '../store/types/actions.type'

    export default {
        name: 'Toolbar',

        methods: {
            toggleSidebar() {
                this.$store.dispatch(TOGGLE_SIDEBAR)
            }
        }
    }
</script>

<style scoped>

</style>
