<template class="hold-transition sidebar-mini">

<div>
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="../../../bower_components/admin-lte/dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can

                </p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="../../../bower_components/admin-lte/dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="../../../bower_components/admin-lte/dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="" class="brand-link">
      <img src="../../../bower_components/admin-lte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../../bower_components/admin-lte/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="javascript:void(0)" class="d-block">sign in,please</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
               <!-- 控制拉伸  menu-open -->
              <!-- :class="'classify'+(current=='0'?' active':'')" -->
          <li  class="nav-item has-treeview">
            <a class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Starter Pages
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <!-- <li @click="formchage1(renderformlist[0])"  class="nav-item">
                <a  href="javascript:void(0)" class="nav-link ">
                  <i class="far fa-circle nav-icon"></i>
                  <p>录入商品</p>
                </a>
              </li> -->
               <li @click="formchage1(renderformlist[item.index])" v-for="item in text" v-bind:key="item.index" class="nav-item">
                <a href="javascript:void(0)" class="nav-link ">
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{item.name}}</p>
                </a>
              </li>
              
              
             
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
  
   <div v-if="renderformlist[0].status" class="tabletag">
   <el-table
    class="col-lg-12"
    :data="Renderdata.slice((currentPage-1)*pageSize,pageSize*currentPage)"
    border
    style="width: 100%">
    <el-table-column
      v-for="(item,index) in clomunlist"
      v-bind:key="index"
      :prop="item.prop"
      :label="item.label"
      :width="item.width">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small"><span class="badge bg-success">编辑</span></el-button>
        <el-button @click="close(scope.row)" type="text" size="small"><span class="badge bg-primary">删除</span></el-button>
       
      </template>

    </el-table-column>
  </el-table>
  <el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="currentPage"
  :page-sizes="[2, 5, 8, 10]"
  :page-size="pageSize"
  layout="total, sizes, prev, pager, next, jumper"
  :total="Renderdata.length">
  </el-pagination>
  
  <template>
   <el-dialog
               
                title="商品信息修改"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose"
                >
                <div  style="margin-bottom:15px">
                <el-input
                v-model="form.id"
                :disabled="true"
                >
                 <template slot="prepend">商品编号</template>
                 {{form.id}}
                </el-input>

                </div>
                <!-- 1 -->

                 <div style="margin-bottom:15px">
                  
                <el-input
                v-model="form.name"
                clearable
                >
                 <template slot="prepend">商品名字</template>
                 {{form.name}}
                </el-input>

                </div>
                <!-- 2 -->
                 <div  style="margin-bottom:15px">
                <el-input
                v-model="form.price"
                clearable
                >
                 <template slot="prepend">商品单价</template>
                 {{form.price}}
                </el-input>
                </div>
                <!-- 3 -->
                 <div style="margin-bottom:15px">
                <el-input
                v-model="form.numbers"
                clearable
                >
                 <template slot="prepend">数量</template>
                 {{form.numbers}}
                </el-input>
                </div>
                <!-- 4 -->
               
                
                
                <span>商品信息修改</span>
                <span slot="footer" class="dialog-footer">
    <el-button @click="canceled()">取 消</el-button>
    <el-button  type="primary"   @click="editform()">确 定</el-button>
  </span>
</el-dialog>
  <el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  class="selectitem"
  @select="handleSelect"
>
 <template slot="prepend">查找</template>
</el-autocomplete>
  <el-button @click="saveddata()">生成json文件</el-button>
  <el-button id="file_id" @click="readFile()">导入json文件</el-button>

</template>

  </div>
 
  <User v-if="renderformlist[1].status"></User>
   <Tabd v-if="renderformlist[2].status"></Tabd>
    <mychart v-if="renderformlist[3].status"></mychart>
 
</div>
</template>

<script>
  // eslint-disable-next-line
import {jq} from '../../../bower_components/admin-lte/plugins/jquery/jquery.min.js'
// eslint-disable-next-line
import {admn} from '../../../bower_components/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
// eslint-disable-next-line
import {admil} from '../../../bower_components/admin-lte/dist/js/adminlte.min.js'
import User from './User'
import Tabd from './tablepage'
import mychart from './ProductForms'
import Axios from 'axios'
import Filesaver from 'file-saver'
// eslint-disable-next-line
import { Loading } from 'element-ui';
// eslint-disable-next-line

// eslint-disable-next-line


export default {
    components:{
      User,
      Tabd,
      mychart
     
    },
   data() {
       return {
         renderformlist:[
           {
              status:false,
              index:0,
            },
            {
              status:false,
              index:1,
            },
            {
              status:false,
              index:2,
            },
            {
              status:false,
              index:3,
            },
            {
              status:false,
              index:4,
            },

         ],
            
            text:[
                {
                name:"商品表",
                index:0,
              },
             
              {
                name:"用户表",
                index:1,
              },
              {
                name:"客户表",
                index:2,
              },
              {
                name:"供应商",
                index:4,
              },
              {
                name:"综合查找(联动查找)",
                index:4,
              },
               {
                name:"图表分析",
                index:3,
              }
            ],
       
            clomunlist:[
              {
                prop:"name",
                label:"商品名",
                width:"220"
              },
              {
                prop:"id",
                label:"商品名",
                width:"220"
              },
              {
                prop:"price",
                label:"商品单价",
                width:"220"
              },
              {
                prop:"amount",
                label:"数量",
                width:"220"
              },
              {
                prop:"time",
                label:"日期",
                width:"220"
              }
            ],
            Renderdata:[],
            searchdata:[],
            state: '',
           
            timeout:  null,
            dialogVisible:false,
            currentPage: 1,
            pageSize: 5,
            listcache:null,
            loading:true,
            form:{
              id:null,
              name:null,
              price:null,
              numbers:null,
            },
            json1:[]
       }
   },
   methods: {
      // eslint-disable-next-line
      formchage1(item){
        //重置
        console.log(this.renderformlist)
        for(let index in this.renderformlist){
          this.renderformlist[index].status=false
        }
        //渲染
        this.renderformlist[item.index].status=true
        console.log("列表位置为"+item.index)
        
      },
      resetform(){
         
         let that=this
         let moveation="renderdata"
         let url="http://localhost:3001/admin/products"
          Axios({
        method:"post",
        url:url,
        data:{
        action:moveation,
       
        }
        }).then((res)=>{
        console.log(res.data);
        let data=res.data
        for(let index in data){
            let getjson={
               name:data[index].name,
               id:data[index].id,
               amount:data[index].amount,
               price:data[index].price,
               time:data[index].created
            }
            that.searchdata.push(getjson)
            
        }
        
         
        })
      },
      // eslint-disable-next-line
       renderform(formdata,ifaccurate){
         let that=this
         let moveation="renderdata"
         let id=1
         let name="null"
         let url="http://localhost:3001/admin/products"
         console.log(ifaccurate)
         if(ifaccurate!=null){
           if(ifaccurate==1){
              moveation="usingID"
              id=formdata
           }else if(ifaccurate==2){
             console.log("enter 2")
             moveation="usingname"
             name=formdata
           }
     

         }
         Axios({
        method:"post",
        url:url,
        data:{
        action:moveation,
        id:id,
        name:name
        }
        }).then((res)=>{
      
        console.log(res.data);
        let data=res.data
        for(let index in data){
            let getjson={
               name:data[index].name,
               id:data[index].id,
               amount:data[index].amount,
               price:data[index].price,
               time:data[index].created
            }
            that.Renderdata.push(getjson)
            
        }
         console.log(that.Renderdata)
         
        })
       },
      //   loadAll() {
      //   console.log(this.Renderdata)
      //   let data=this.Renderdata
      //   return data
      // },
      async querySearchAsync(queryString, cb) {
     
        console.log(cb)
        console.log("queryString: ",queryString)
         var restaurants =await this.searchdata;
           //判断querystring是id查找还是name查找
         var reg=new RegExp("[0-9]+")
         if(reg.test(queryString)){
           console.log("按id查找")
            for(let item in restaurants){
             restaurants[item]['value']=restaurants[item].id
           }
           console.log("data:",restaurants)
         }else{
            console.log("按name查找")
             for(let item in restaurants){
             restaurants[item]['value']=restaurants[item].name
           }
           console.log("data:",restaurants)
         }
           //因为autocomplete组件只识别value键值，需要对后台数据做处理
          

        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
        //清除等待时间
        clearTimeout(this.timeout);

        //设置等待时间
        this.timeout = setTimeout(() => {
         cb(results);
        
        }, 3000 * Math.random());
        if(queryString){
          console.log("getwords")
         
        }else{
          
          this.renderform(null)
          this.Renderdata=[]
        }
        
      },
      createStateFilter(queryString) {
        return (state) => {
        
          
          //value为key值名字
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
       // eslint-disable-next-line
       handleSelect(item) {
         //点击后执行表单查找 item=1（按id查找）2（按name查找）
            
            this.Renderdata=[]
            console.log("itemval: ",item)
            var reg=new RegExp("[0-9]+")
            if(reg.test(item.value)){
              
              this.renderform(item.value,1)
            }else{
                 this.renderform(item.value,2)
            }
       
          console.log("item selected",item)
      },
       handleClick(row) {
        console.log(row)
        this.form.id=row.id
        this.form.name=row.name
        this.form.price=row.price
        this.form.numbers=row.amount
        this.dialogVisible=true
       
      },
       handleClose(done) {
        this.$confirm('确认关闭？')
         // eslint-disable-next-line
          .then(_ => {
            done();
          })
           // eslint-disable-next-line
          .catch(_ => {});
      },
      close(done){
          var that=this
          console.log(done)
          this.$confirm('确认删除？')
         // eslint-disable-next-line
          .then(_ => {
            that.deleteform(done.id,1)
           
            that.Renderdata=[]
            that.searchdata=[]
            that.renderform(null)
            that.resetform()
            console.log("confirmed")
            done();
          })
           // eslint-disable-next-line
          .catch(_ => {console.log("canceled")});
      },
      deleteform(formdata,ifaccurate){
         // eslint-disable-next-line
        let id=1
         // eslint-disable-next-line
        let moveation="null"
        let url="http://localhost:3001/admin/products"
        if(ifaccurate==1){
              console.log("enter 3")
              moveation="usingdel"
              id=formdata
           }
           Axios({
        method:"post",
        url:url,
        data:{
        action:moveation,
        id:id,
       
        
        }
        }).then((res)=>{
      
        console.log(res.data);
        
        })
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize=val
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage=val
      },
       saveddata(){
       
        let data=JSON.stringify(this.Renderdata)
        let blob=new Blob([data])

        Filesaver.saveAs(blob,'dnmd.json')
        this.json1.push(blob)
        console.log(blob)
       
      },
      // eslint-disable-next-line
      editform(){
        let url="http://localhost:3001/admin/products"
        let moveation="updating"
        let that=this
        let data={
            id:this.form.id,
            name:this.form.name,
            amount:parseInt(this.form.numbers),
            price:parseFloat(this.form.price) 
        }
          // eslint-disable-next-line
       const loading = Loading.service({
            lock: true,
            text: '处理中...',//可以自定义文字
            spinner:'el-icon-loading',//自定义加载图标类名
            background: 'rgba(0, 0, 0, 0.7)'//遮罩层背景色
  });
           Axios({
        method:"post",
        url:url,
        data:{
        action:moveation,
        id:data.id,
        name:data.name,
        price:data.price,
        amount:data.amount
        }
        }).then((res)=>{
          
        console.log(res.data);
         setTimeout(()=>{
            loading.close()
          },2000)
          that.Renderdata=[]
          that.searchdata=[]
          that.renderform(null)
         
          that.resetform()
        
        })

  
    
        this.dialogVisible = false
        this.listcache=null
        
   
      },
      canceled(){
        this.listcache=null
        this.dialogVisible = false
        console.log(this.listcache)
       

      },
   readFile() {
    if(this.json1.length!=0){
       // eslint-disable-next-line
       let reader=new FileReader()
  
       // eslint-disable-next-line
      let data= reader.readAsText(this.json1[0],'utf-8')
      //  读取文件内容
       reader.onload=function(){
          data = JSON.parse(reader.result);
          console.log(data)
       }
      
    }
  }
     
  
      
    },
    created() {
      this.renderform(null)
      this.resetform()
    },
    mounted() {
      // this.restaurants = this.loadAll();
       
    }
    
}
</script>


<style scoped src="../../../bower_components/admin-lte/pages/UI/../../plugins/fontawesome-free/css/all.min.css"></style>
<style scoped src="../../../bower_components/admin-lte/pages/UI/../../plugins/toastr/toastr.min.css"></style>
<style scoped src="../../../bower_components/admin-lte/pages/UI/../../dist/css/adminlte.min.css"></style>
<style scoped >

.selectitem{
  height: 20px;
  float: left;  
}
.forminput{
  margin-bottom:10px ;
}
.tabletag{
    width: 80%;
    height: auto;
    background: white;
    position: absolute;
    top: 58px;
    left: 256px;
}
</style>

 

