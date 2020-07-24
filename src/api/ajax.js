// axios 本身是函数，也能当成对象使用 
// const axios = reqiure('axios')

import axios from 'axios'
import {Message} from 'element-ui'
import router from '../router'


axios.defaults.timeout = 2000;
axios.interceptors.request.use(function(config){
    // console.log(config);
    const token = sessionStorage.getItem('token');
    if(token){

        config.headers.Authorization = 'Bearer ' + token;
    }
    return config
})

axios.interceptors.response.use(function(response){
    // console.log(window.vm);
    try{
        if(response.data.code === 0){
            return response.data.data;
        }else if(response.data.code === 401){
            sessionStorage.clear()
            router.push('/login')
            // window.location.replace('/');
        }else if(response.data.code === -1){
            Message({ message: response.data.msg || '请求失败,请稍后重试', type: 'error', duration: 2000 })
            throw response.data.msg || '请求失败,请稍后重试';
        }
    }catch(err){
        console.log(err);
    }
},error=>{
    // console.log(error);
    if(error && error.response && error.response.status){
        switch(error.response.status){
            case 401:
                router.push('/login')
                
        }
    }
    throw error
})

export default axios