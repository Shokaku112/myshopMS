<template>
  
  <div class="tabletag">
   
            <el-table
     :data="tableData.slice((currentPage - 1) * pageSize, currentPage*pageSize)"
      style="width: 100%">
      <el-table-column
        prop="clientname"
        label="客户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="productname"
        label="订购产品"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ProductProductid"
        label="产品编号">
      </el-table-column>
      <el-table-column
        prop="ordersprice"
        label="批发单价">
      </el-table-column>
      <el-table-column
        prop="ordersnumbers"
        label="订购数量">
      </el-table-column>
    </el-table>
 
  <el-pagination
  style="float:left"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="currentPage"
  :page-sizes="[2, 5, 8, 10]"
  :page-size="pageSize"
  layout="total, sizes, prev, pager, next, jumper"
  :total="tableData.length">
  
</el-pagination>
  <el-button @click="showform()" style="float:left;height:30px;">新增客户</el-button>
  <el-button @click="showproduct()" style="float:left;height:30px;">新增商品</el-button>
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
   <div  style="margin-bottom:15px">
                <el-input
                :disabled="false"
                v-model="clientname"
                >
                 <template slot="prepend">客户名</template>
                </el-input>
                </div>
                <!-- clientname -->
                
    <div  style="margin-bottom:15px">
     <label  for="name">产品名：</label>
        <el-select id="name" v-model="value" placeholder="请选择">
                 {{log()}}
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                 >
                  
                </el-option>
              </el-select>
              </div> 

              <div  style="margin-bottom:15px">
                <el-input
                v-model="id"
                :disabled="true"
                >
                 <template slot="prepend">产品编号</template>
                </el-input>
                </div>      

                
              <div  style="margin-bottom:15px">
                <el-input
                v-model="havingamount"
                :disabled="true"
                >
                 <template slot="prepend">剩余数量</template>
                </el-input>
                </div>    

                 <div  style="margin-bottom:15px">
                <el-input
                v-model="numbers"
                :disabled="false"
                >
                 <template slot="prepend">订购数量</template>
                </el-input>
                </div>      
                 <div  style="margin-bottom:15px">
                <el-input
                v-model="price"
                :disabled="false"
                >
                 <template slot="prepend">产品单价</template>
                </el-input>
                </div>           

 
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="createclient()">确 定</el-button>
  </span>
</el-dialog>
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible2"
  width="30%"
  :before-close="handleClose">
  
                
              <div  style="margin-bottom:15px">
                <el-input
                v-model="productname"
                >
                 <template slot="prepend">产品名</template>
                </el-input>

              </div> 

              <div  style="margin-bottom:15px">
                <el-input
                v-model="productid"
                >
                 <template slot="prepend">产品编号</template>
                </el-input>
                </div>      

                 <div  style="margin-bottom:15px">
                <el-input
                v-model="amount"
               
                >
                 <template slot="prepend">产品数量</template>
                </el-input>
                </div>      
                 <div  style="margin-bottom:15px">
                <el-input
                v-model="money"
                :disabled="false"
                >
                 <template slot="prepend">产品单价</template>
                </el-input>
                </div>           

 
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="createproduct()">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>


<script>
import Axios from 'axios'
export default {
    
data() {
    return {
         tableData: [],
          options: [],
        value:null,
        name:'',
        currentPage: 1,
        pageSize: 2,
        dialogVisible: false,
        id:'无',
        client:null,
        clientname:null,
        numbers:null,
        price:null,
        dialogVisible2: false,
        productname:null,
        productid:null,
        amount:null,
        money:null,
        havingamount:null,
        
    }
},
 methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize=val
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage=val
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
      // handleClose()
      createclient(){
        // alert("剩余数量",this.havingamount)       
        // alert("订购数量",this.numbers)
        if((this.client!=null)&&(parseInt(this.havingamount)-parseInt(this.numbers)>0)){
        let that=this
        let url="http://localhost:3001/admin/client"
        let proname=this.client.name
        let clientname=this.clientname
        let id=this.client.id
        let amount=parseInt(this.numbers)
        let price=parseFloat(this.price)
        Axios({
          method:"post",
          url:url,
          data:{
            action:"createclient",
            productname:proname,
            client:clientname,
            productid:id,
            numbers:amount,
            price:price
          }
        }).then(function(res){
          console.log(res)
          that.dialogVisible = false
          that.renderclientdata()
        })
        }else{
          alert("库存不足！,请联系供应商！")
        }
       
      },
      //createclient()
      //  let proname=this.client.name
      //   let clientname=this.clientname
      //   let id=this.client.id
      //   let amount=parseInt(this.numbers)
      //   let price=parseFloat(this.price)
      showform(){
        this.price=0
        this.numbers=0
        this.clientname=null

        this.dialogVisible = true
        this.resetform()
      },
      resetform(){
         this.options=[]
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
            that.options.push(getjson)
            
        }
        console.log("optionsdata",that.options)
        
        
         
        })
      },
      log(){
        console.log("idval",this.id)
       
        let that=this
        this.id=this.value
        if(this.id==null){
              console.log("null")
        }else{

          //通过find方法查找对象属性下的id获取name值
      let  selectedWorkName = this.options.find((item)=>{
          console.log(item.id)
          console.log(that.value)
          if(item.id==that.value){
            return item
          }
         
          });

          this.client=selectedWorkName
          this.havingamount=selectedWorkName.amount
        }
        

         
      },
      showproduct(){
        this.dialogVisible2=true
      },
      createproduct(){
        // console.log(this.productname)
        // console.log(this.productid)
        // console.log(this.amount)
        // console.log(this.money)
       let url="http://localhost:3001/admin/products"
       let action="adddata"
       let that=this
       let name=this.productname
       let price=this.money
       let id=this.productid
       let amount=this.amount
        Axios({
        method:"post",
        url:url,
        data:{
        action:action,
        name:name,
        id:id,
        price:price,
        amount:amount
        }
        }).then(function(res){
          console.log(res)
          that.dialogVisible2=false
          that.productname=null
          that.money=null
          that.productid=null
          that.amount=null
        })

      },
      renderclientdata(){
        this.tableData=[]
         // eslint-disable-next-line
         let that=this
         let moveation="renderclient"
         let url="http://localhost:3001/admin/client"
          Axios({
        method:"post",
        url:url,
        data:{
        action:moveation,
        }
        }).then((res)=>{
        console.log("clientdata",res.data);
        for(let item in res.data){
         that.tableData.push(res.data[item])
        }
        console.log(that.tableData)
         
        })

      }
    },
   computed:{
     
   },
   created() {
     this.renderclientdata()
   },
     
}
</script>

<style scoped>
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


</style>>

