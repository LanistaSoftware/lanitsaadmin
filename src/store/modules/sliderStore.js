/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    
}
//Getters
const getters = {
   
}
//Mutations
const mutations = {
  
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
    getBlog({
        commit
    }) {  
        return api().get('blog').then(res => {
            let blogs = res.data.blogs

            commit("setBlogs", blogs)
        }).catch(err => {
            alert(err)
        })
    },
    deleteBlog({},id) {
        return api().delete('blog/' + id).then(res => {
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    updateBlog({},{id,content}) {
        return api().put('blog/'+id,{content}).then((res) => {
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    getContentAction({ commit}, content) {
        return commit("setContent", content)
    },
    getUpdateContent2({commit},updatecon){
        return commit("setUpdateContent", updatecon)
    },
    getUpdateId({commit},id){
        return commit("setUpdateId", id)
    }
}
export default {
    state,
    getters,
    mutations,
    actions

}
