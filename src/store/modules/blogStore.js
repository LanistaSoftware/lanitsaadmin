import api from '../api'
const state = {
    blogs: [],
}

const getters = {
    getBlogs(state) {
        return state.blogs;
    }
}

const mutations = {
    setBlogs(state, blogs) {
        return state.blogs = blogs
    }
}

const actions = {
    addBlog({},content) {
        return api().post('blog',content).then(res => {
            console.log(res.statusText);
        }).catch(err => {
            console.log(err)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions

}
