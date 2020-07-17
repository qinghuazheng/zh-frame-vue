// axios 本身是函数，也能当成对象使用 
// const axios = reqiure('axios')
import axios from 'axios'

axios.interceptors.request.use(function(config){
    console.log(config);
    const token = sessionStorage.getItem('token');
    if(token){
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config
})

axios.interceptors.response.use(function(response){
    if(response.data.code === 0){
        return response.data.data;
    }
})

export default axios