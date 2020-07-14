import tag from './tag.vue'
tag.install = function(Vue){
    Vue.component(tag.name,tag)
}
export default tag