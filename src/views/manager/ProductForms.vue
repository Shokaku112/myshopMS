<template>
  <div>

      <div class="tabletag">
        <div id="chartform" class="chartform">
        </div>
         <div id="chartform2" class="chartform">
        </div>
        
  </div>
  </div>
</template>

<script>

import Axios from 'axios';

export default {
    data() {
        return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
        Renderdata:[],
        RenderUser:[],
        
        }
    },
  
    methods: {
      sortDown(a,b){
        return Date.parse(a)-Date.parse(b)
      },
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
         handleClick(row) {
        console.log(row);
      },
        renderform(){
         let that=this
         let url="http://localhost:3001/admin/products"
                   Axios({
        method:"post",
        url:url,
        data:{
        action:"renderdata"
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
          that.rendercharts('chartform')
        })
        
        
    },
      renderuser(){
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
        console.log(res.data);
         // eslint-disable-next-line
        let data=res.data
        that.RenderUser=res.data
         // eslint-disable-next-line
        let chartname=[];
        let chartproduct=[]
         // eslint-disable-next-line
        let chartdate=[];
        let chache=[];//时间段
        let cacheproduct=[]//产品
        console.log("User: ",that.RenderUser)
        //格式化UTC日期
        for(let index in that.RenderUser){
          let getmonth
          let getdate
          let getyear=String(new Date(that.RenderUser[index].createdAt).getFullYear())
          if(parseInt(new Date(that.RenderUser[index].createdAt).getMonth()+1)<10){
              // eslint-disable-next-line
              getmonth='0'+String(new Date(that.RenderUser[index].createdAt).getMonth()+1)
             console.log("<10")
          }else{
             // eslint-disable-next-line
              getmonth=new Date(that.RenderUser[index].createdAt).getMonth()+1
               console.log(">10")
          }
           if(parseInt(new Date(that.RenderUser[index].createdAt).getDate())<10){
               getdate='0'+String(new Date(that.RenderUser[index].createdAt).getDate())
           }else{
               getdate=String(new Date(that.RenderUser[index].createdAt).getDate())
           }
          
          that.RenderUser[index].createdAt=getyear+'-'+getmonth+'-'+getdate
          chache.push(that.RenderUser[index].createdAt)
          cacheproduct.push(that.RenderUser[index].productname)
        }


        //去重
       
       
        for(let item in chache){

          if(chartname.indexOf(chache[item])==-1){
             chartname.push(chache[item])
          }else{
            //  console.log(chartname.indexOf(chache[item]))
          }
        }
        console.log("sortbefore: ",chartname)
        console.log("sortafter: ",chartname.sort(that.sortDown))
        //对日期进行按从小到大排序
        // console.log(chartname)
        //获得series数组（日期时间段）
        for(let index in cacheproduct){
          if(chartproduct.indexOf(cacheproduct[index])==-1){
             chartproduct.push(cacheproduct[index])
          }else{
            //  console.log(chartname.indexOf(chache[item]))
          }
        }//获得series数组（产品段）
        // console.log(chartproduct)//最后得到chartname和chartproduct的serial值

        //获取日期下的数据集（）
        let array1=[]

        for(let index in that.RenderUser){
            for(let item in chartproduct){

              if(that.RenderUser[index].productname==chartproduct[item]){
                 
                  if(array1[chartproduct[item]]){
                    console.log("defined")
                  }else{
                     console.log("undefined")
                     array1[chartproduct[item]]={}
                     //将当前商品出现的日期全部添加到商品对象里面
                     for(let date in chartname){
                      array1[chartproduct[item]][chartname[date]]=0
                      // console.log(array1[chartproduct[item]])
                     }
                     
                    
                  }
                  // console.log("data: ",array1[chartproduct[item]])
                 
              }else{
                // console.log(chartproduct)//最后得到chartname和chartproduct的serial值
              }
            }
        }
          
            // eslint-disable-next-line
          for(let index in that.RenderUser){
            // eslint-disable-next-line
              for(let item in array1){
                if(that.RenderUser[index].productname==item){
                   //查找商品名
                   // eslint-disable-next-line
                   for(let time in array1[item]){
                     if(that.RenderUser[index].createdAt==time){
                       array1[item][time]+=parseInt(that.RenderUser[index].ordersnumbers)
                     }
                   }
                   //查找对应时间戳
                   
                }else{
                   // eslint-disable-next-line
                }
              
              
              }
          }
          let formchart={
          date:chartname,
          product:chartproduct,
          arraydata:array1
        }
          that.infoclient(formchart)
          //图表数组封装完毕
        
        console.log(formchart)
         
        })
       },
    rendercharts(chartname){
      var echarts=require('echarts')
      // eslint-disable-next-line
      var product=this.Renderdata
      // 基于准备好的dom，初始化echarts实例
      var type=[]
      var amount=[]
      for(let index in product){
        type.push(product[index].name)
        amount.push(parseInt(product[index].amount))
      }
      console.log("data: ",type,amount,this.Renderdata)
      var myChart = echarts.init(document.getElementById(chartname));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '产品库存情况'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: type
            },
            yAxis: {
              
            },
            series: [{
                name: '库存量',
                type: 'bar',
                data: amount
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      console.log("rendering")
    },
    infoclient(chartdata){
      console.log("chartdata: ",chartdata)
       // eslint-disable-next-line
      let chartseries=[]
       // eslint-disable-next-line
      
      var echarts=require('echarts')
      var myChart = echarts.init(document.getElementById('chartform2'));

      for(let item in chartdata.arraydata){
        let formatdata={
            name: item,
            type: 'line',
            stack: '总量',
            data: []
      }
        console.log(chartdata.arraydata[item])
        for(let index in chartdata.arraydata[item]){
          formatdata.data.push(chartdata.arraydata[item][index])
        }
        chartseries.push(formatdata)
      }
      console.log(chartseries)


       // eslint-disable-next-line
      var option={
        title: {text: '订单趋势'},
        legend:{
          data:chartdata.product
        },
        tooltip:{
          trigger:'axis'
        },
        xAxis:{
          data:chartdata.date
        },
        yAxis:{},
        series:chartseries
      }
      myChart.setOption(option)
      
    }
    //根据日期为横坐标，显示客户订购产品趋势
    },
    //methods
    created() {
        
      
    },
    mounted() {
       this.renderform()
       this.renderuser()
    },

}
</script>

<style scope>
.tabletag{
    width: 80%;
    height: auto;
   
    position: absolute;
    top: 58px;
    left: 256px;
}
.chartform{
  margin-bottom: 20px;
  width: 900px;
  height:400px;
}

</style>