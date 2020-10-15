import { FETCH_ROUTES } from '../types/actions.type'
import { SET_ROUTES } from '../types/mutations.type'
import MainDataService from '../../services/main.service'

const state = {
    routes: []
}

const getters = {
    routes: state => state.routes
}

const actions = {
    async [FETCH_ROUTES] ({ comit, state }) {
        const { data } = await MainDataService.retrieveAllRouts()
        comit(SET_ROUTES, data)
    }
}

const mutations = {
    [SET_ROUTES] (state, routes) {
        state.routes = routes
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
