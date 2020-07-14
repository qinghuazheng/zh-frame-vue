// 包含应用中所有请求函数

import ajax from './ajax'

// const baseUrl = 'http://localhost:3000'
const baseUrl = ''

export function reqLogin(username,password){
    ajax({
        method:'post',
        url:`${baseUrl}/login`,
        data:{
            username,
            password
        }
    })
}

reqLogin('admin','admin')