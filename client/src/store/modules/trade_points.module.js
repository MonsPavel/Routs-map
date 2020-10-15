import { SET_TRADE_POINTS } from '../types/mutations.type'
import { FETCH_TRADE_POINTS } from '../types/actions.type'
import MainDataService from '../../services/main.service'

const state = {
    tradePoints: []
}

const getters = {
    tradePoints: state => state.tradePoints
}

const actions = {
    async [FETCH_TRADE_POINTS] ({ commit, state }) {
        const { data } = await MainDataService.retrieveAllPoints()
        console.log(data)
        commit(SET_TRADE_POINTS, data)
    }
}

const mutations = {
    [SET_TRADE_POINTS](state, tradePoints) {
        console.log(tradePoints)
        state.tradePoints = tradePoints
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
