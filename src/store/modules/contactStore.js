/* eslint-disable no-empty-pattern */
import api from '../api'


const state={
    contact:{},
}
const getters={
    getterContact(state){
        return state.contact
    }
}
const mutations={
    setContact(state,value){
        return state.contact=value
    }
}
const actions={
    addContact({},contact){
        return api().post('contact',contact).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{console.log(err)})
    },
    getContact({commit}){
        return api().get('contact').then(res=>{
            commit("setContact",res.data.contacts[0])
        }).catch(err=>{console.log(err)})
    },
    addLogo({},logo){
        return api().post('contact/logo',logo).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{console.log(err)})
    },
    addLogoImage({},image){
        return api().post('contact/logo/image',image,{headers:{'Content-Type': 'multipart/form-data'}}).then(res=>{
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