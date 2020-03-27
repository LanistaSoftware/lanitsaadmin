/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    slide:'',
    sliders:'',
    activeSlide:''
}
//Getters
const getters = {
   getASlide(state){
       return state.slide
   },
   getAllSlide(state){
    return state.sliders
},
    getActiveSlide(state){
        return state.activeSlide
    }
}
//Mutations
const mutations = {
  setslide(state,slide){
    return state.slide = slide 
  },
  setAllslide(state,sliders){
    return state.sliders = sliders 
  },
  setActiveSlide(state,slide){
      return state.activeSlide=slide
  }
}
//Actions
const actions = {
    addSlide({},slideset) {
        return api().post('slide', slideset,{ headers: {
            'Content-Type': 'application/json'
        }}).then((res) => {
            
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    addSlideimage({},form) {
        console.log(form)
        return api().post('slide/image', form,{ headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Headers':'Content-Type'
        }}).then((res) => {
            console.log(form)
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    getAllSlide({commit}) {  
        return api().get('slide').then(res => {
         
            let slide = res.data.sliders
            commit("setAllslide", slide)
        }).catch(err => {
            alert(err)
        })},
    getSlide({commit},id) {  
        return api().get('slide/' + id).then(res => {
            let slide = res.data.sliders
           
            commit("setslide", slide)
        }).catch(err => {
            alert(err)
        })},    
        updateSlide({},{id,slideset}) {
            return api().put('slide/'+id,slideset).then(res => {
                alert(res.statusText)
            }).catch(err => {
                alert(err)
            })
        },
    deleteSlide({},id) {
        return api().delete('slide/' + id).then(res => {
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    activeSlide({},id){
        return api().post('slide/active/' +id).then(res=>{
            alert(res.statusText)
        }).catch(err=>{
            alert(err)
        })
    },
    getActiveSlide({commit}){
        return api().get('slide/active').then((res)=>{
            const slide = res.data.sliders
            commit("setActiveSlide",slide)
        })
    }
}
export default {
    state,
    getters,
    mutations,
    actions

}
