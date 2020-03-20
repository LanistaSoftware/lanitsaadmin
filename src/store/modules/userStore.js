/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    Users: [],
    tabs: [],
}
const getters = {
    getTabs(state) {
        return state.tabs;
    },
    getUser(state) {
        return state.Users;
    }
}
const mutations = {
    setTabs(state, tab) {
        return state.tabs = tab
    },
    setUser(state, users) {
        return state.Users = users
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
            console.log(err)
        })
    },
    addUser({}, item) {
        return api().post('http://localhost:3000/api/user', item).then((res) => {
            console.log(res.statusText)
            console.log(item)
        }).catch(err => {
            console.log(err.message)
            console.log(err.message)
        })
    },
    updateUser({}, {
        id,
        edit
    }) {
        return api().put('http://localhost:3000/api/user/' + id, edit).then((res) => {
            console.log(res.statusText)
        }).catch(err => {
            console.log(err.message)
            console.log(err.message)
        })
    },
    deleteUser({}, id) {
        return api().delete('/user/' + id).then(res => {
            console.log(res.statusText)

        }).catch(err => {
            console.log(err.message)
        })
    }
}
export default {
    state,
    getters,
    mutations,
    actions

}