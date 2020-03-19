import api from '../../api'

export const  addTabs = ({commit},tab) => {
    commit("setTabs",tab)
}
export const getUser =({commit})=>{
   return api().get('/user').then(res=>{
    let users=[];  
    users = res.data.users
      
        commit("setUser",users)
  }).catch(err=>{
    console.log(err)
  })
}
export const addUser = ({},item)=>{
  return api().post('http://localhost:3000/api/user', item).then((res) => {
    console.log(res.statusText)
    console.log(item)
  }).catch(err => {
    console.log(err.message)
    console.log(err.message)
  })
} 
export const updateUser = ({},{id,edit})=>{
  return api().put('http://localhost:3000/api/user/'+id, edit).then((res) => {
    console.log(res.statusText)
  }).catch(err => {
    console.log(err.message)
    console.log(err.message)
  })
} 

export const deleteUser = ({},id) =>{
  return api().delete('/user/'+id).then(res=>{
      console.log(res.statusText)
      
  }).catch(err=>{
    console.log(err.message)
  })
}