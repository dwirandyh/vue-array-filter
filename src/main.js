// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ArrayComponent from './components/ArrayComponent'
import FilterComponent from './components/FilterComponent'

Vue.config.productionTip = false
Vue.component('array-component', ArrayComponent)
Vue.component('filter-component', FilterComponent)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
