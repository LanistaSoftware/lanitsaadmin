/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    blogs: [],
    content: '',
    updateContent:'',
    updateId:''
}
//Getters
const getters = {
    getBlogs(state) {
        return state.blogs;
    },
    getContent(state) {
        return state.content
    },
    getUpdateContent(state) {
        return state.updateContent
    },
    getUpdateId(state){
        return state.updateId
    }
}
//Mutations
const mutations = {
    setBlogs(state, blogs) {
        return state.blogs = blogs
    },
    setContent(state, content) {
        return state.content = content
    },
    setUpdateContent(state,con){
        return state.updateContent=con
    },
    setUpdateId(state,id){
        return state.updateId=id
    }
}
//Actions
const actions = {
    addBlog({},content) {
        return api().post('blog', content).then(() => {
            console.log(content);
        }).catch(err => {
            console.log(err)
        })
    },
    getBlog({
        commit
    }) {  
        return api().get('blog').then(res => {
            console.log(res.statusText);
            let blogs = res.data.blogs

            commit("setBlogs", blogs)
        }).catch(err => {
            console.log(err)
        })
    },
    deleteBlog({},id) {
        return api().delete('blog/' + id).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    updateBlog({},{id,content}) {
        return api().put('blog/'+id,{content}).then(() => {
            console.log(content)
        }).catch(err => {
            console.log(err)
        })
    },
    getContentAction({ commit}, content) {
        console.log(content)
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