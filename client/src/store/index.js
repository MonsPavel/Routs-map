import Vue from 'vue'
import Vuex from 'vuex'

import sidebar from './modules/sidebar.module'
import agents from './modules/agents.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        sidebar,
        agents
    }
})
