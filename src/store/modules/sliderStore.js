/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    slide:'',
    sliders:'',
}
//Getters
const getters = {
   getASlide(state){
       return state.slide
   },
   getAllSlide(state){
    return state.sliders
}
}
//Mutations
const mutations = {
  setslide(state,slide){
    return state.slide = slide 
  },
  setAllslide(state,sliders){
    return state.sliders = sliders 
  }
}
//Actions
const actions = {
    addSlide({},slideset) {
        return api().post('slide', slideset).then((res) => {
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
}
export default {
    state,
    getters,
    mutations,
    actions

}
