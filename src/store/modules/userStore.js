/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    Users: [],
    tabs: [],
    password:null
}
const getters = {
    getTabs(state) {
        return state.tabs;
    },
    getUser(state) {
        return state.Users;
    },
    getPassword(state){
        return state.password
    }
}
const mutations = {
    setTabs(state, tab) {
        return state.tabs = tab
    },
    setUser(state, users) {
        return state.Users = users
    },
    setPassword(state, password){
        return state.password = password
    }
}

const actions = {
    addTabs({
        commit
    }, tab) {
        commit("setTabs", tab)
    },
    getUser({
        commit
    }) {
        return api().get('/user').then(res => {
            let users = [];
            users = res.data.users

            commit("setUser", users)
        }).catch(err => {
            alert(err)
        })
    },
    addUser({},item) {
        return api().post('/user', item).then((res) => {
            alert(res.statusText)
    
        }).catch(err => {
            alert(err.message)
            alert(err.message)
        })
    },
    updateUser({},{id,edit}) {
        return api().put('/user/' + id, edit).then((res) => {
            alert(res.statusText)
        }).catch(err => {
            alert(err.message)    
        })
    },
    deleteUser({},id) {
        return api().delete('/user/' + id).then(res => {
            alert(res.statusText)

        }).catch(err => {
            alert(err.message)
        })
    }
}
export default {
    state,
    getters,
    mutations,
    actions

}