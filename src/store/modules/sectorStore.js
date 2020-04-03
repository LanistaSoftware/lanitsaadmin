/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    sectors:{},
    sectorGalery:{},
}
const getters={
    getterSector(state){
        return state.sectors
    },
    getterGalery(state){
        return state.sectorGalery
    }
}
const mutations={
    setSector(state,sectors){
        return state.sectors = sectors
    },
    setGalery(state,galery){
        return state.sectorGalery=galery
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
    },
    addGalery({},image){
        return api().post('sector/galery',image).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{console.log(err)})
    },
    addGaleryImage({},image){
        return api().post('sector/galery/image',image,{ headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Headers':'Content-Type'
        }}).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{console.log(err)})
    },
    getGalery({commit}){
        return api().get('sector/galery').then(res=>{
            let galery = res.data.sectorImages
            commit("setGalery",galery)
        }).catch(err=>{console.log(err)})
    },
    deleteGalery({},{id,img}){
        return api().delete('sector/galery/'+id+'/'+img).then((res)=>{
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