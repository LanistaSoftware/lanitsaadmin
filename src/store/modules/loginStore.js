/* eslint-disable no-empty-pattern */
import api from '../api'

const state = {
  isLogined:false
}
const getters = {
    getLogin(state) {
        return state.isLogined;
    }

}
const mutations = {
    setLogin(state, login) {
        return state.isLogined = login
     }
}

const actions = {
    loginPost({commit},item) {
        return api().post('login', item).then((res) => {
            if (res.status==200) {
               if (res.data=='Giriş Başarılı') {
                alert(res.data)
                commit("setLogin",true)
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
    }
}
export default {
    state,
    getters,
    mutations,
    actions

}