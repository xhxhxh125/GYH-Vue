import Vue from 'vue'
import App from './App'
import appsettings from 'common/appsettings.js'
Vue.use(appsettings)
/* eslint-disable no-new */
new Vue({el: '#app',template: '<App/>', components: { App }})