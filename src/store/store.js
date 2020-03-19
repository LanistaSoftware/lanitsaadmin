import Vue from 'vue'
import Vuex from "vuex"
import * as mutations from './mutations.js'
import * as actions from './actions.js'
import * as getters from './getters.js'
Vue.use(Vuex)
// {link:'/blogs',label:'Makaleler' },
// {link:'/addblog',label:'Makale Ekle' }
export const store = new Vuex.Store({
    state : {
        tabs :[],
        Users:[],
    },
    mutations,
    getters,
    actions,
   
})