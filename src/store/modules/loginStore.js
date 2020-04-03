/* eslint-disable no-empty-pattern */
import api from '../api'

const state = {
  isLogined:false,
  token:'',
}
const getters = {
    getLogin(state) {
        return state.token !== ""
    }

}
const mutations = {
    setLogin(state, login) {
        return state.isLogined = login
     },
     setToken(state,token){
        return state.token = token
     },
     clearToken(state){
        state.token = ""
    }
}

const actions = {
    initAuth({commit}){
        let token = localStorage.getItem("token")
        if (token) {
            commit("setToken",token)
        }
    },
    logout({ commit}){
        commit("clearToken")
        localStorage.removeItem("token")
        
        this.$router.replace("/")
    },
    loginPost({commit,dispatch},item) {
        return api().post('login', item).then((res) => {
            console.log(res)
            if (res.status==200) {
               if (res.data.message =='Giriş Başarılı') {
                alert(res.data.message)
                commit("setLogin",true)
                commit("setToken",res.data.token)
                localStorage.setItem("token",res.data.token)
                dispatch("setTimeoutTimer")
               }else{
                   alert(res.data)
               }
            }else{
                console.log(res)
                alert(res.data)
            }
            console.log(res)
        }).catch(err => {
            alert(err.message)
        })
    },
    setTimeoutTimer({dispatch}){
        setTimeout(() => {
            dispatch("logout")
        }, 3600*1000)
    }
}
export default {
    state,
    getters,
    mutations,
    actions

}