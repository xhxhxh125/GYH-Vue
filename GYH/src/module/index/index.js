import Vue from 'vue'
import App from './Default'
import appsettings from 'common/appsettings.js'
Vue.use(appsettings)
/* eslint-disable no-new */
new Vue({el: '#app',template: '<App/>', components: { App }})