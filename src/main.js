import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
