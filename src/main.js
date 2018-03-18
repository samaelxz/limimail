// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import '../static/custom.less'

import Index from './components/Index'
import Log from './components/Log'
import Sin from './components/Sin'

Vue.use(VueRouter)
Vue.use(iView)

// The routing configuration
const routes = [
  {path: '/', component: Index},
  {path: '*', component: Index},
  {path: '/log', component: Log},
  {path: '/sin', component: Sin}
]

const router = new VueRouter({
  mode: 'hash',
  routes: routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
