<template>
	<!-- <aside class="main-aside">侧边栏</aside> -->
	<div>
    <div class="aside-header">
        商品管理系统
    </div>
	<el-aside style="width:200px">
		<el-menu :default-active="activeRoute" router unique-opened	>
			<!-- <el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>导航一</template>
					<el-menu-item :route="{path:'/about'}" index="1-1">选项一</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
					<template slot="title"><i class="el-icon-message"></i>导航二</template>
					<el-menu-item disabled :route="{path:'/main/index'}" index="2-1">选项二</el-menu-item>
			</el-submenu> -->
			<template v-for="item in menuList">
				<el-submenu v-if="item.children && item.children.length > 0" :key="item.id" :index="item.id+''"> 
						<template slot="title"><i :class="item.icon"></i>{{item.authName}}</template>
						<template v-for="child in item.children"> 
							<el-menu-item :key="child.id" :index="'/main/' + child.path">{{child.authName}}</el-menu-item>
							<!-- <el-menu-item :key="child.id" :index="'/main/' + child.path" @click="saveNavState('/main/' + child.path)">{{child.authName}}</el-menu-item> -->
							<!-- <el-menu-item :key="child.id" :route="{path:child.path}" :index="child.id+''">{{child.authName}}</el-menu-item> -->
						</template>  
				</el-submenu>
			</template>
		</el-menu>
</el-aside>
</div>
</template>

<script>
export default {
	data(){
		return{
			activeRoute:'/main/index',
        }
    },
    props:['menuList'],
	created(){
		this.activeRoute = window.sessionStorage.getItem('activeRoute')
	},
	watch:{
		$route(value){
			const {path} = value;
			this.saveNavState(path);
		}
	},
	methods:{
		saveNavState(value){
			window.sessionStorage.setItem('activeRoute',value);
			this.activeRoute = value;
		}
	}
}
</script>

<style>

</style>