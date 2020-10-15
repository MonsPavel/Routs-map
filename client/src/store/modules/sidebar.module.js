import { SET_SIDEBAR_STATE } from '../types/mutations.type'
import { TOGGLE_SIDEBAR } from '../types/actions.type'

const state = {
    isMini: false
}

const getters = {
    sidebarMini: state => state.isMini
}

const actions = {
    [TOGGLE_SIDEBAR] ({ commit, state }) {
        commit(SET_SIDEBAR_STATE)
    }
}

const mutations = {
    [SET_SIDEBAR_STATE] (state) {
        state.isMini = !state.isMini
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
