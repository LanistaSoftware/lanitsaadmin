import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://test.lanista.com.tr/api`,
    withCredentials: false,    
  })
}
