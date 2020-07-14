import Tabs from './Tabs.vue'
import TabPane from './TabPane.vue'

Tabs.install=function(Vue){
    Vue.component(Tabs.name,Tabs);
    Vue.component(TabPane.name,TabPane);
}

export default Tabs