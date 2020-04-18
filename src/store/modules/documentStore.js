/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    documents: ''
}
const getters ={
    gettersDocument(state){
        return state.documents
    }
}
const mutations ={
   setDocuments(state,value){
       state.documents=value
   }
}

const actions= {
    getDocuments({commit}){
        return api().get('document').then((res)=>{
            commit('setDocuments',res.data.documents)
         }).catch(err=>{alert(err)})
     },
    addDocument({},document){
       return api().post('document',document).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
   addFile({},file){
       return api().post('document/file',file,{headers:{'Content-Type': 'multipart/form-data'}}).then(res=>{
           alert(res.statusText)
       }).catch(err=>{alert(err)})
   },
   deleteFile({},id){
       return api().delete('document/'+id).then(res=>{
           alert(res.statusText)
       }).catch(err=>{alert(err)})
   },
}
export default {
    state,
    getters,
    mutations,
    actions
}