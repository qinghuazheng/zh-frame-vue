<template>
    <div class="tabs-wrapper">
        <div class="tabs-header">
            <button v-for="item in tabPanes"
             @click="toggleTab(item.name)"
             :class="{active: item.name === activeName}">
             {{item.label}}
             </button>
        </div>
        <div class="tabs-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'Tabs',
    data(){
        return{
            tabPanes:[]
        }
    },
    props:['value'],
    methods:{
        toggleTab(value){
            // 父组件通过v-model绑定的属性 
            this.$emit('input',value)
        }
    },
    mounted(){
        // 在父组件上通过this.$children访问子组件的一些属性
        this.tabPanes = this.$children;
    },
    computed:{
        activeName(){
            return this.value
        }
    }
}
</script>

<style>
    .tabs-wrapper{
        border: 1px solid #ccc;
        padding: 10px;
    }
    .tabs-header{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
    }
    .tabs-header .active{
        background: #fff;
    }
</style>