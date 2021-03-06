import Vue from 'vue'
import Router from 'vue-router'
import FilterComponent from '@/components/FilterComponent'
import ArrayComponent from '@/components/ArrayComponent'

Vue.use(Router)

Vue.filter('toUSD', function (value) {
    return '$' + value
})

export default new Router({
    routes: [
        {
            path: '/',
            name: 'FilterComponent',
            component: FilterComponent
        },
        {
            path: '/array',
            name: 'ArrayComponent',
            component: ArrayComponent
        }
    ]
})
