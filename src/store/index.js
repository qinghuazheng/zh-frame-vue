import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        menuList:JSON.parse(sessionStorage.getItem('menuList')) || [],
        userName:sessionStorage.getItem('userName')||''
  },
  mutations: {
        //在执行mutation的时候 将vuex中的数据进行本地初始化   
        setMenuList(state,payload){
            // console.log(state,payload);
            state.menuList=payload;
            sessionStorage.setItem('menuList',JSON.stringify(payload));
        },
        setUserName(state,userName){
            state.userName=userName;
            sessionStorage.setItem('userName',userName);
        }
  },
  actions: {
  },
  modules: {
  }
})
