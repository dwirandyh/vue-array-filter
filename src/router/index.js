import Vue from 'vue'
import Router from 'vue-router'
import FilterComponent from '@/components/FilterComponent'

Vue.use(Router)

Vue.filter('toUSD', function (value) {
    return '$' + value
})

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: FilterComponent
        }
    ]
})
