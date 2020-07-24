// 包含应用中所有请求函数

import ajax from './ajax'

// const baseUrl = 'http://localhost:3000'
const baseUrl = ''

export function reqLogin(username,password){
    return ajax({
        method:'post',
        url:'/login',
        data:{
            username,
            password
        }
    })
}

export function getuser(params){
    return ajax({
        method:'get',
        url:'/user/getUser',
        params
    })
}

export function getGoods(){
    return ajax({
        method:'get',
        url:'/goods'
    })
}