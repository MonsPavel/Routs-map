<template>
    <div>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { FETCH_AGENTS } from '../store/types/actions.type'

    export default {
        name: 'Agents',

        computed: mapGetters(['agents']),

        methods: mapActions([FETCH_AGENTS]),

        mounted: async function () {
            this[FETCH_AGENTS]()
        }
    }
</script>

<style scoped>

</style>
