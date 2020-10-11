<template>
    <v-navigation-drawer
            :mini-variant.sync="sidebarIsMini"
            permanent
    >
        <v-list dense>
            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'Sidebar',

        data () {
            return {
                items: [
                    { title: 'Агенты', icon: 'mdi-account-multiple', link: 'agents' },
                    { title: 'Торговые точки', icon: 'mdi-garage-open', link: 'trade-points' },
                    { title: 'Маршруты', icon: 'mdi-routes', link: 'routes' }
                ]
            }
        },

        computed: {
            sidebarIsMini () {
                return this.$store.state.sidebar.isMini
            }
        }
    }
</script>

<style scoped>

</style>
