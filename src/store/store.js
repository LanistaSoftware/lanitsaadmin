import Vue from 'vue'
import Vuex from "vuex"
import user from '../store/modules/userStore'
import blog from '../store/modules/blogStore'
Vue.use(Vuex)
// {link:'/blogs',label:'Makaleler' },
// {link:'/addblog',label:'Makale Ekle' }
export const store = new Vuex.Store({
    state : {
        tabs :[{
            link: '/',
            label: 'Welcome'
          },],
       
    },
    modules:{
        user,
        blog
    }
})