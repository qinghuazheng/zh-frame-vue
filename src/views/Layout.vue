<template>
    <el-container class="mian-layout"> 
        <side-bar :menuList="menuList" class="main-aside"></side-bar>
        <el-container class="main-section">
            <top-bar></top-bar>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import topBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import {mapState} from 'vuex'

export default {
    components:{topBar,SideBar},
    data(){
        return{
            // menuList:[]
        }
    },
    computed:{
        ...mapState(['menuList'])
    },
    created(){
        console.log(this.menuList);
        // this.menuList = this.menuList;
    }
}
</script>

<style>

</style>