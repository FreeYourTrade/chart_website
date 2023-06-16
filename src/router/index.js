import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Notfind from '../views/Notfind.vue'
import Chart from '../views/Chart.vue'

Vue.use(Router)

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/chart',
            name: 'ChartPage',
            component: Chart
        },
        {
            path: '/*',
            name: 'Notfind',
            component: Notfind
        },
    ],
})