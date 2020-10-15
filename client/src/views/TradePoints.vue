<template>
    <div class="trade-points">
        <v-data-table
                :headers="headers"
                :items="tradePoints['trade-points']"
                class="elevation-1"
        ></v-data-table>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { FETCH_TRADE_POINTS } from '../store/types/actions.type'
    export default {
        name: 'TradePoints',

        data() {
            return {
                headers: [
                    {
                        text: 'Название',
                        value: 'name',
                    },
                    {
                        text: 'Адрес',
                        value: 'address'
                    }
                ],
                tableData: [ { "id": 1, "login": "demo", "gender": "male", "age": 25, "first_name": "Демо", "last_name": "Демов", "middle_name": "Демович" }, { "id": 2, "login": "valetin", "gender": "male", "age": 23, "first_name": "Валентин", "last_name": "Петухов", "middle_name": "Иванович" }, { "id": 3, "login": "nikolay", "gender": "male", "age": 18, "first_name": "Николай", "last_name": "Программистов", "middle_name": "Петрович" }, { "id": 4, "login": "anna", "gender": "female", "age": 21, "first_name": "Aнна", "last_name": "Валентинова", "middle_name": "Дмитровна" }, { "id": 5, "login": "anna_2", "gender": "female", "age": 29, "first_name": "Анна", "last_name": "Иванова", "middle_name": "Ивановна" }, { "id": 6, "login": "sadovnikova_e", "gender": "female", "age": 19, "first_name": "Екатерина", "last_name": "Садовникова", "middle_name": "Артёмовна" }, { "id": 7, "login": "dmitriyr", "gender": "male", "age": 25, "first_name": "Дмитрий", "last_name": "Русаков", "middle_name": "Викторович" }, { "id": 8, "login": "ivant", "gender": "male", "age": 25, "first_name": "Иван", "last_name": "Тягов", "middle_name": "Сергеевич" }, { "id": 9, "login": "vittu", "gender": "male", "age": 31, "first_name": "Виталий", "last_name": "Евтув", "middle_name": "Юрьевич" }, { "id": 10, "login": "alex", "gender": "male", "age": 27, "first_name": "Александр", "last_name": "Гусев", "middle_name": "Сергеевич" } ]
            }
        },

        computed: mapGetters(['tradePoints']),

        methods: mapActions([FETCH_TRADE_POINTS]),

        async mounted() {
            this[FETCH_TRADE_POINTS]()
        }
    }
</script>

<style lang="sass">
    .trade-points
        width: 100%
        padding: 20px
</style>
