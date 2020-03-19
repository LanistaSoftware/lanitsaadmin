import api from '../api'
const state = {
    blogs: [],
    content:'',
}
//Getters
const getters = {
    getBlogs(state) {
        return state.blogs;
    },
    getContent(state){
        return state.content
    }
}
//Mutations
const mutations = {
    setBlogs(state, blogs) {
        return state.blogs = blogs
    },
    setContent(state, content) {
        return state.content = content
    }
}
//Actions
const actions = {
    addBlog({},content) {
        return api().post('blog',content).then(res => {
            console.log(res.statusText);
        }).catch(err => {
            console.log(err)
        })
    },
    getBlog({commit}) {
        return api().get('blog').then(res => {
            console.log(res.statusText);
            let blogs = res.data.blogs
            
            commit("setBlogs",blogs)
        }).catch(err => {
            console.log(err)
        })
    },
    getContentAction({commit},content){
        console.log(content)
      return  commit("setContent",content)
    }
}

export default {
    state,
    getters,
    mutations,
    actions

}
