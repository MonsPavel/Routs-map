import { SET_AGENTS } from '../types/mutations.type'
import { FETCH_AGENTS } from '../types/actions.type'
import MainDataService from '../../services/main.service'

const state = {
    agents: []
}

const getters = {
    agents: state => state.agents
}

const actions = {
    async [FETCH_AGENTS] ({ commit, state }) {
        const { data } = await MainDataService.retrieveAllAgents()
        commit(SET_AGENTS)
    }
}

const mutations = {
    [SET_AGENTS](state, article) {
        state.article = article;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
