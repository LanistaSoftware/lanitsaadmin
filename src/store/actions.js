import axios from 'axios'

export const  addTabs = ({commit},tab) => {
    commit("setTabs",tab)
}
export const getUser =({commit})=>{
   return axios.get('http://localhost:3000/api/user').then(res=>{
        commit("setUser",res.data.users)
  }).catch(err=>{
    console.log(err)
  })
}