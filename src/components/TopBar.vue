<template>
  <!-- <header class="main-header">头部</header> -->
  <el-header class="main-header">
    <div class="logo"></div>
    <el-dropdown @command="handleCommand" class="operate">
        <span>{{userName}}</span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    
</el-header>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['userName'])
    },
    methods:{
        handleCommand(value){
            if(value==='logout'){
                sessionStorage.clear();
                this.$router.push('/login');
                window.location.reload();
            }
        }
    },
    created(){
        console.log(this.userName);
    }
}
</script>

<style>

</style>