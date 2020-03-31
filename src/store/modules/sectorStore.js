/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    sectors:{}
}
const getters={
    getterSector(state){
        return state.sectors
    }
}
const mutations={
    setSector(state,sectors){
        return state.sectors = sectors
    }
}
const actions={
    addSector({},sector){
        return api().post('sector',sector).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
    getSectors({commit}){
        return api().get('sector').then((res)=>{
            let sectors = res.data.sectors
            commit("setSector",sectors)
        })
    },
    deleteSector({},id){
        return api().delete('sector/'+id).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
    updateSector({},{id,sector}){
        return api().put('sector/'+id,sector).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{console.log(err)})
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}