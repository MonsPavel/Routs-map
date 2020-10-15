<template>
    <div>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { FETCH_TRADE_POINTS } from '../store/types/actions.type'
    export default {
        name: 'TradePoints',

        computed: mapGetters(['tradePoints']),

        methods: mapActions([FETCH_TRADE_POINTS]),

        async mounted() {
            this[FETCH_TRADE_POINTS]()
        }
    }
</script>

<style scoped>

</style>
