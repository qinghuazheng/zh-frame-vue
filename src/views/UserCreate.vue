<template>
  <div class="about">
    <h1>新增用户页面</h1>
    <!-- <Tabs/> -->
    <!-- <tab-pane/> -->
    <!-- 组件内部使用组件是不会被显示，插槽  -->
    <!-- 多重组件的封装嵌套 组件中的slot 组件传值 组件通讯（$emit发布自定义事件） -->
    <tabs v-model="activeName">
        <tab-pane label="用户管理" name="first">用户管理</tab-pane>
        <tab-pane label="配置管理" name="second">配置管理</tab-pane>
        <tab-pane label="角色管理" name="third">角色管理</tab-pane>
        <tab-pane label="定时任务管理" name="fourth">定时任务管理</tab-pane>
    </tabs>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                activeName:'second'
            }
        }
    }
</script>  
