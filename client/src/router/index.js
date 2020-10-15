import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Agents from '../views/Agents'
import TradePoints from '../views/TradePoints'
import Routes from '../views/Routes'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/agents',
        name: 'Agents',
        component: Agents
    },
    {
        path: '/trade-points',
        name: 'TradePoints',
        component: TradePoints
    },
    {
        path: '/routes',
        name: 'Routes',
        component: Routes
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
