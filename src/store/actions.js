import api from './api'

export const  addTabs = ({commit},tab) => {
    commit("setTabs",tab)
}
export const getUser =({commit})=>{
   return api().get('/user').then(res=>{
    let users={};  
    users = res.data.users
      
        commit("setUser",users)
  }).catch(err=>{
    alert(err)
  })
}
export const addUser = ({},item)=>{
  return api().post('http://localhost:3000/api/user', item).then((res) => {
    alert(res.statusText)
   
  }).catch(err => {
    console.log(err.message)
    alert(err.message)
  })
} 
export const deleteUser = ({},id) =>{
  return api().delete('/user/'+id).then(res=>{
      alert(res.statusText)
      
  }).catch(err=>{
    alert(err.message)
  })
}