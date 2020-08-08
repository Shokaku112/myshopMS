<template>
  
      <div class="tabletag">
   <el-table
    class="col-lg-12"
    :data="Renderdata"
    border
    style="width: 100%">
    <el-table-column
      prop="admin"
      label="管理用户"
      width="400">
    </el-table-column>
     <el-table-column
     
      prop="password"
      label="密钥"
      width="400">
    </el-table-column>
     <el-table-column
     
      prop="id"
      label="编号"
      width="400">
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

   
  <el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  class="selectitem"
  @select="handleSelect"
>
 <template slot="prepend">查找</template>
</el-autocomplete>
  

  </div>
</template>
<script>
  // eslint-disable-next-line
import {jq} from '../../../bower_components/admin-lte/plugins/jquery/jquery.min.js'
// eslint-disable-next-line
import {admn} from '../../../bower_components/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
// eslint-disable-next-line
import {admil} from '../../../bower_components/admin-lte/dist/js/adminlte.min.js'

import Axios from 'axios'
// eslint-disable-next-line
import { Loading } from 'element-ui';
// eslint-disable-next-line

// eslint-disable-next-line


export default {
   
   data() {
       return {
        
            tablelist:[
              {
                prop:"管理员账号",
                label:"商品名",
                width:"220"
              },
              {
                prop:"密码",
                label:"商品名",
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
            }
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
        // eslint-disable-next-line
         let that=this
         let moveation="renderuser"
         let url="http://localhost:3001/admin/user"
          Axios({
        method:"post",
        url:url,
        data:{
        action:moveation,
       
        }
        }).then((res)=>{
        console.log(res.data);
         // eslint-disable-next-line
        let data=res.data
        for(let item in data){
          let formjson={
            admin:data[item].admin,
            password:data[item].password,
            id:data[item].id,
          }
          that.searchdata.push(formjson)
        }
       
        
         
        })
      },
      // eslint-disable-next-line
       renderform(){
       // eslint-disable-next-line
         let that=this
         let moveation="renderuser"
         let url="http://localhost:3001/admin/user"
          Axios({
        method:"post",
        url:url,
        data:{
        action:moveation,
       
        }
        }).then((res)=>{
        console.log(res.data);
         // eslint-disable-next-line
        let data=res.data
        for(let item in data){
          let formjson={
            admin:data[item].admin,
            password:data[item].password,
            id:data[item].id,
          }
          that.Renderdata.push(formjson)
        }
       
        
         
        })
       },
     
     
      async querySearchAsync(queryString, cb) {
     
        
        console.log("queryString: ",queryString)
         var restaurants =await this.searchdata;
         console.log("restaurants: ",restaurants)
           //判断querystring是id查找还是name查找
         var reg=new RegExp("[0-9]+")
         if(reg.test(queryString)){
           console.log("按id查找")
            for(let item in restaurants){
             restaurants[item]['value']=String(restaurants[item].id)
           }
           console.log("data:",restaurants)
         }else{
            console.log("按name查找")
             for(let item in restaurants){
             restaurants[item]['value']=restaurants[item].admin
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
            
            for(let index in this.Renderdata){

                if(this.Renderdata[index].admin==item.value){
                  this.Renderdata=[]
                  this.Renderdata.push(item)
                }
            }
            console.log("itemval: ",item.value)
            console.log(this.Renderdata)
            console.log("name: ",item)
         
       
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
      
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize=val
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage=val
      },
      // eslint-disable-next-line

      canceled(){
        this.listcache=null
        this.dialogVisible = false
        console.log(this.listcache)
       

      }
  
      
    },
    created() {
      this.renderform()
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
