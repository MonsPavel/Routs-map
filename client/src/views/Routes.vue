<template>
    <div>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { FETCH_ROUTES } from '../store/types/actions.type'

    export default {
        name: 'Routes',

        computed: mapGetters(['routes']),

        methods: mapActions([FETCH_ROUTES]),

        async mounted() {
            this[FETCH_ROUTES]()
        }
    }
</script>

<style scoped>

</style>
