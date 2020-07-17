<template>
    <div v-show="name === $parent.activeName">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabPane',
    data(){
        return{

        }
    },
    props:['label','name'],
    mounted(){
        // console.log(this.$parent);
        
    }
}
</script>

<style>

</style>