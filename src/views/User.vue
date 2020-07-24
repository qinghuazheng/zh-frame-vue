<template>
  <div class="page">
    <div class="page-title">
      用户列表
    </div>
    <div class="page-block">
      <div class="search">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <label>名称</label>
            <el-input v-model="form.name" size="mini"></el-input>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <label>地址</label>
            <el-input v-model="form.address" size="mini"></el-input>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <el-button type="primary" size="mini" @click="search">搜索</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="page-block">
      <div class="tabulation">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column 
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
          prop="_id"
          label="id">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="count"
          label="数量">
        </el-table-column>
      </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page.sync="model.page.currentPage"
          :page-size.sync="model.page.pageSize"
          layout="total, sizes, jumper, prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import {getuser} from './../api/index'
  export default{
    data(){
      return{
        // 查询参数相关
        model:{
          search:{},
          page:{
            currentPage:2,
            pageSize:20,
          }
        },
        total:undefined,
        
        form:{
          name:undefined,
          address:undefined
        },
        tableData: []
      }
    },
    created(){
      this.loadTable();
    },
    methods:{
      loadTable(){
        getuser({...this.form,...this.model.page}).then(res=>{
          this.tableData = res.docs;
          this.total = res.total;
        })
      },
      search(){
        this.loadTable()
      },
      // 分页规格变化
      sizeChange(value){
        console.log(value);
        console.log(this.pageSize);
        this.loadTable();
      },
      // 当前页码变化
      currentChange(value){
        console.log(value);
        console.log(this.currentPage);
        this.loadTable();
      }
    }
  }
</script>
<style>
  /* serch */
  .search .el-col{
    margin-bottom: 16px;
  }
  .search .el-col:last-child{
    float: right;
    padding-top: 20px;
    text-align: right;
  }
  .search .el-col label{
    display: block;
    margin-bottom: 4px;
  }


  /* tabulation */
  .tabulation .el-table thead th{
    background-color: #FAFAFA;
  }
  .tabulation .el-table__body tr:hover>td{
    background-color: #FAFAFA;
  }

  /* pagination */
  .pagination{
    margin-top: 12px;
    text-align: right;
  }
  .el-pagination span:not([class*=suffix]) {
    vertical-align: baseline;
  }
  .pagination .el-pagination__sizes{
    float: left;
  }
</style>  
