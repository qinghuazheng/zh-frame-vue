<template>
  <div class="login">
        <el-form ref="ruleForm" class="login-form">
            <el-form-item>
                <label>用户名</label>
                <el-input type="text" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item>
                <label>密码</label>
                <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login-button" type="primary" @click="onSubmit('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {initDynamicRoutes} from '@/router'
export default {
    data(){
        return{
            loginForm:{
                username:'',
                password:'',
            }
        }
    },
    methods:{
        onSubmit(){
            const menuList = [{
                id:1,
                authName:'用户管理',
                icon:'icon-user',
                children:[{
                //     id:11,
                //     authName:'新增用户',
                //     path:'user/create'
                // },{
                    id:12,
                    authName:'用户列表',
                    path:'user/list'
                }]
            }];
            const token = 'yqiueruqtwegkqhda';
            this.$store.commit('setMenuList',menuList);
            this.$store.commit('setUserName',this.loginForm.username);
            sessionStorage.setItem('token',token);

            // 根据用户所具备的权限，动态添加路由规则
            initDynamicRoutes();
            this.$router.push('main/index');
        }
    }
}
</script>

<style>
    .login{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-form{
        padding: 40px;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 10px #ccc;
    }
    .login-form .el-form-item{
        margin-bottom: 0px;
    }
    .login-form .login-button{
        margin-top: 20px;
    }
</style>