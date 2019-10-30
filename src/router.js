import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Chart from './views/Chart.vue'
import ChartContainer from './components/ChartContainer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/chartcontainer',name: 'chartcontainer',component: ChartContainer},
    {path: '/chart',name: 'chart',component: Chart},
  ]
})
