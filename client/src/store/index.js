import Vue from 'vue'
import Vuex from 'vuex'

import sidebar from './modules/sidebar.module'
import agents from './modules/agents.module'
import tradePoints from './modules/trade_points.module'
import routes from './modules/routes.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        sidebar,
        agents,
        tradePoints,
        routes
    }
})
