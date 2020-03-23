/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    blogs: [],
    content: '',
    updateContent:'',
    updateId:'',
    addBlogContent:'',
    updatePage:false
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
    },
    getAddBlogContent(state){
        return state.addBlogContent
    },
    getUpdatePage(state){
        return state.updatePage
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
    },
    setAddBlogContent(state,content){
        return state.addBlogContent=content
    },
    setUpdatePage(state, value){
        return state.updatePage = value
    }
}
//Actions
const actions = {
    addBlog({},content) {
        return api().post('blog', content).then((res) => {
            alert(res.statusText)
        }).catch(err => {
            console.log(err)
        })
    },
    getBlog({
        commit
    }) {  
        return api().get('blog').then(res => {
            let blogs = res.data.blogs

            commit("setBlogs", blogs)
        }).catch(err => {
            console.log(err)
        })
    },
    deleteBlog({},id) {
        return api().delete('blog/' + id).then(res => {
            alert(res.statusText)
        }).catch(err => {
            console.log(err)
        })
    },
    updateBlog({},{id,content}) {
        return api().put('blog/'+id,{content}).then((res) => {
            alert(res.statusText)
        }).catch(err => {
            console.log(err)
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
