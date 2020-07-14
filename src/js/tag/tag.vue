<template>
  <span class="tag">{{content}}</span>
</template>

<script>
export default {
    name:'tag',
    props:{
        text: String,
    },
    data(){
        return {
            content:'标签'
        }
    },
    methods:{
        a(){

        }
    }
}
</script>

<style scoped>
    .tag{
        color:green;
    }
</style>