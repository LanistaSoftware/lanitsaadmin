import Vue from 'vue'
import App from './App.vue'
import {router} from '../router/router'
import {store} from './store/store'

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
// if you don't want install the component globally
Vue.use(VueYouTubeEmbed, { global: false })
// if you want to install the component globally with a different name
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" });



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
