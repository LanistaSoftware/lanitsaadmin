import Vue from 'vue'
import App from './App.vue'
import {router} from './router'


import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
// if you don't want install the component globally
Vue.use(VueYouTubeEmbed, { global: false })
// if you want to install the component globally with a different name
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" });
<<<<<<< HEAD

=======
>>>>>>> 925d607bccd5557bd5d19946fe23342e2c75c6f2



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
