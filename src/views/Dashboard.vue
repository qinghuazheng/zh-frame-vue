<template>
  <h1>首页</h1>
</template>

<script>
import {getGoods} from '../api/index.js'
export default {
  created(){
    getGoods().then(res=>{
      console.log(res);
    }).catch(e=>{
      console.log(e);
      this.$message({message:"请求超时",type:"error"})
    })
  }
}
</script>

<style>

</style>