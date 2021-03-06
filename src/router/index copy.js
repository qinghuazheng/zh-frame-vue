import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import UserCreate from '../views/UserCreate.vue'
import User from '../views/User.vue'
import Error from '../views/Error.vue'
import Layout from '../views/Layout.vue'
import store from '../store'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
console.log('0000000');
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect:'/login'
  },{
    path: '/login',
    component:Login
  },{
    path:'/main',
    component:Layout,
    children:[{
      path:'index',
      component:Dashboard
    // },{
    //     path:'user/create',
    //     component:()=> import(/* webpackChunkName: "about" */ '../views/UserCreate.vue')
    // },{
    //   path:'user/list',
    //   component: () => import(/* webpackChunkName: "userlist" */ '../views/User.vue')
    }]
  },{
      path:'*',
      component: Error
  }
]

const router = new VueRouter({
  routes
})

// 用户不具备权限的路由是否应该压根儿就不存在
// 动态路由的使用

const userCreateRule = {path:'user/create',component:UserCreate};
const userListRule = {path:'user/list',component:User};

const ruleMapping = {
    'user/create': userCreateRule,
    'user/list': userListRule,
}


// 防止用户跳过登录界面对其他页面进行访问
router.beforeEach((to,from,next)=>{
    const token = sessionStorage.getItem('token');
    console.log(to,from);
    if(to.path==='/login'){
        next();
    }else{
        if(!token){
            next('/login');
        }else{
            // 在防止用户在没有某个菜单权限的情况下，手动输入该菜单的地址进行跳转
            next();
        }
    }
})

export function initDynamicRoutes(){
    // 根据二级权限，对路由规则进行动态添加

    const currentRoutes = router.options.routes;
    const menuList = store.state.menuList;
    menuList.forEach(item=>{
        item.children.forEach(item=>{
            const temp = ruleMapping[item.path];
            currentRoutes[2].children.push(temp);    
        })
    })
    // currentRoutes[2].children.push();
    router.addRoutes(currentRoutes)
    console.log('router:',router,store);
}

export default router

// 防止用户跳过登录界面对其他页面进行访问
// router.beforeEach((to,from,next)=>{
//     const token = sessionStorage.getItem('token');
//     const menuAuth = JSON.parse(sessionStorage.getItem('menuList')) || [];
//     const pathAuth =  menuAuth.reduce((pre,cur)=>{
//         if(cur.children && cur.children.length > 0){
//             let pathList = cur.children.map(item=>'/main/'+item.path);
//             return pre.concat(pathList)
//         }
//         return pre;
//     },[])
    
//     if(to.path==='/login'){
//         next();
//     }else if(to.path==='/Error'){
//         next();
//     }else{
//         if(!token){
//             next('/login');
//         }else{
//             // 在防止用户在没有某个菜单权限的情况下，手动输入该菜单的地址进行跳转
//             // to.path与用户权限(从vuex中取出)的列表进行比对，从而决定是否跳转
//             // debugger;
//             if(!pathAuth.includes(to.path)){
//                 next('/Error')
//             }else{
//                 next();
//             }
//         }
//     }
// })

