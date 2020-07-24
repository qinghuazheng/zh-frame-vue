<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    import {initDynamicRoutes} from './router'
    export default{
        name:'app',
        created(){
            // console.log('xxxx');
            initDynamicRoutes();
        }
    }
</script>

<style lang="scss">
  #app{
    height: 100%;
  }
</style>
