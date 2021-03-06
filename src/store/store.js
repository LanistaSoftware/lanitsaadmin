import Vue from 'vue'
import Vuex from "vuex"
import user from '../store/modules/userStore'
import blog from '../store/modules/blogStore'
import slider from '../store/modules/sliderStore'
import reference from '../store/modules/referenceStore'
import sector from '../store/modules/sectorStore'
import aboutUs from '../store/modules/aboutUs'
import product from '../store/modules/productStore'
import pigment from '../store/modules/pigmentStore'
import employe from '../store/modules/employeStore'
import contact from '../store/modules/contactStore'
import login from '../store/modules/loginStore'
import document from '../store/modules/documentStore'
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
        blog,
        slider,
        reference,
        sector,
        aboutUs,
        product,
        pigment,
        employe,
        contact,
        login,
        document
    }
})