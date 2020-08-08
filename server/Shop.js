const { Sequelize, DataTypes, Model } = require('sequelize');
const express = require('express');
const router = express.Router();
const mysql=require('mysql2')
const jwt=require('jsonwebtoken')
const fs=require('fs')
const path=require('path');
const { Op } = require("sequelize");

// const bodyParser = require('body-parser');
// const app=express()
// app.use(bodyParser.json());//数据JSON类型
// app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据
// const { JSON } = require('mysql2/lib/constants/types');
//连接数据库测试
// name: {type: Sequelize.STRING, string: '登录名',}, //登录名
        // nickName: {type: Sequelize.STRING, string: "昵称"}, //昵称
const sequelize = new Sequelize('myshopms', 'root', 'root', {
    host: 'localhost',
    dialect: "mysql"
  });

var config={
    "Admin":{
        admin:{type:Sequelize.STRING,string:'username', unique:true,allowNull: false},
        password:{type:Sequelize.STRING,string:'userpassword',},
        id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,string:'id',allowNull: false}
    },
    "Product":{
        productname:{type:Sequelize.STRING,string:'productname',allowNull: false},
        productid:{type:Sequelize.STRING,string:'productid',allowNull: false,primaryKey:true},
        numbers:{type:Sequelize.STRING,string:'numbers',allowNull: false},
        price:{type:Sequelize.FLOAT,string:'price',allowNull: false},
    },
    "Client":{
        clientname:{type:Sequelize.STRING,string:'clientname',allowNull: false},
        ordersnumbers:{type:Sequelize.INTEGER,string:'numbers',allowNull:false},
        ordersprice:{type:Sequelize.FLOAT,string:'price',allowNull:false},
        productname:{
            type:Sequelize.STRING,
            string:'productname',
            allowNull:false
        },
        id:{
            type:Sequelize.INTEGER,
            string:'id',
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        ProductProductid: {
            type: DataTypes.STRING,
            string:'ProductProductid',
            allowNull:true,
        }
            
    },
    "Supplier":{
        suppliernumber:{type:Sequelize.STRING,string:'supperliernumber',allowNull:false},
        suppliername:{type:Sequelize.STRING,string:'supperliername',allowNull:false},
        productname:{
            type:Sequelize.STRING,
            string:'productname',
            allowNull:false,
        },
        id:{
            type:Sequelize.INTEGER,
            string:'id',
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        ProductProductid: {
            type: DataTypes.STRING,
            string:'ProductProductid',
            allowNull:false,
            unique:true
        }
        
        
    }
}

var model={
    Admin:sequelize.define('Admin',config.Admin),
    Product:sequelize.define('Product',config.Product),
    Client:sequelize.define('Client',config.Client),
    Supplier:sequelize.define('Supplier',config.Supplier),
    handleRelationShip: function () {
        var that=this;
          // 创建一个 一对一 关系, hasOne 和 belongsTo 关联一起使用;
        this.Product.hasMany(this.Client,{onDelete:'CASCADE'})
        this.Client.belongsTo(this.Product,{foreginKey:'productid'})
        //这里的关系为一个商品可以有多个客户，但多个客户也可以订购一个商品
        this.Product.hasMany(this.Supplier,{onDelete:'CASCADE',foreginKey:'productid'})
        this.Supplier.belongsTo(this.Product,{foreginKey:'productid'})
        //一个供应商可以有多个商品
        //每个商品只能由一个供应商
        
        // this.Factory.hasMany(this.FactorySupervisor, {onDelete: 'CASCADE'});
        // this.Production_Process.belongsTo(this.Product, {foreignKey: 'productId'});
         // 可以创建外键：
//   bar_id: {
//     type: DataTypes.INTEGER,

//     references: {
//       // 这是对另一个模型的参考
//       model: Bar,

//       // 这是引用模型的列名
//       key: 'id',

//       // 使用 PostgreSQL,可以通过 Deferrable 类型声明何时检查外键约束.
//       deferrable: Deferrable.INITIALLY_IMMEDIATE
//       // 参数:
//       // - `Deferrable.INITIALLY_IMMEDIATE` - 立即检查外键约束
//       // - `Deferrable.INITIALLY_DEFERRED` - 将所有外键约束检查推迟到事务结束
//       // - `Deferrable.NOT` - 完全不推迟检查(默认) - 这将不允许你动态更改事务中的规则
//     }
//   },
        
    },
    syncDatabase: function () {

        try {
            sequelize.sync({alter: true});// 使用 alter:true 模型会自动检查字段，进行添加、修改、删除
        } catch (e) {
            console.log(e);
        }

    },
    //idea:每次接受data（JSON格式）和statuscode（获得查找类型标识）通过标识判断采用哪一种查询方式进行查询
    //statecodes：1（登录验证模块）2（商品模块）3（客户表模块）4（供应商模块）5（综合模块）
    adddata: async function(data,statuscode){
        
        // testforinsert
        // const user1=model.Product.create({productname:"百威啤酒",productid:"12093450",numbers:11,price:100})
        // const admin1=model.Admin.create({admin:"shokaku112@jb.com",password:'as1334'})
        if(statuscode==4){
            const newclientdata=await model.Client.create({
                ProductProductid:data.id,
                productname:data.productname,
                clientname:data.client,
                ordersprice:data.price,
                ordersnumbers:data.numbers
            })
            // 记录客户订单记录
            const changeproductnums=await model.Product.update({
                numbers:sequelize.literal('numbers-'+data.numbers)
                
            },{
                where:{
                    productid:data.id
                }
            }
            )

        }
        if(statuscode==1){
            const newproductdata=await model.Product.create({
                productid:data.id,
                productname:data.name,
                price:data.price,
                numbers:data.amount
            })
        }
        return ("ok")

    },
    updateddata:async function(data,statuscode){
       

        // 1productiontab
        if(statuscode==1){
            //delete on Product
            const result=await model.Product.update({
                productname:data.name,
                numbers:data.amount,
                price:data.price
            },{
                where:{
                     productid:data.id,
                }
              
            })
            return ("update done",result[0].productid)
           
        }


    },
    searchdata: async function(data,statuscode){

        if(statuscode==null){
            const result=await model.Product.findAll({
                where:{
                   price:{
                    [Op.between]:[25.6,40],
                    // [Op.gt]: 2
                   }
                }
            })
        }
        if(statuscode==1){
            console.log("User is logining!")
            const result=await model.Admin.findAll({
                where:{
                     admin:data.name,
                     password:data.password
                }
            })
            if(result.length){
                let datajson={
                    admin:result[0].dataValues.admin,
                    password:result[0].dataValues.password,
                    statusCode:1
                }
                return datajson
            }else{
                return ("statusCode:-1")
            }
           
            
          
        }
        //用户登录


        if(statuscode==2){
            //  （全部查找）
            if(data!=null){
                console.log("query accurately")
                console.log(data)
                if(data.id!=null){
                    console.log("query accurately-id")
                    const result=await model.Product.findAll({
                        where:{
                             productid:data.id,
                        }
                    })
                    const formdata=model.formatProduct(result)
                
                    console.log("精确查找",result.length)
                    console.log(formdata)
                    return formdata;
                }
                else if(data.name!=null){
                    console.log("query accurately-name")
                     const result=await model.Product.findAll({
                        where:{
                             productname:data.name,
                        }
                    })
                    const formdata=model.formatProduct(result)
                    console.log("精确查找",result.length)
                    console.log(formdata)
                    return formdata;
                }else{
                    console.log("query accurately-name-id")
                }
            }else if(!data){
               
                const result=await model.Product.findAll()
                const formdata=model.formatProduct(result)
                
                console.log("全部查找！",result.length)
                return formdata;
               
            }
        }
       //产品表单查找
      
        if(statuscode==3){
            if(!data){
               
                const result=await model.Admin.findAll()
                // const formdata=model.formatAdmin(result)
                console.log("全部查找！",result.length)
                return result;
               
            }


        }
        //管理用户列表模块

        if(statuscode==4){
            
            if(!data){
               
                const result=await model.Client.findAll({
                    // 将按最大年龄进行升序排序
                    // ASC, DESC 升序和降序
                    // sequelize.fn('max', sequelize.col('age')),
                    order: [['ordersprice', 'ASC']],   
                })
                // const formdata=model.formatAdmin(result)
                console.log("全部查找！",result.length)
                return result;
               
            }



        }
        //客户列表模块
        if(statuscode==5){

        }
        //供应商模块
      
       
    },
    formatProduct(result){
        let formdata=[]
        for (index in result){
            //解析date格式
            let year=String(new Date(result[index].dataValues.updatedAt).getFullYear())
            let month=String (new Date(result[index].dataValues.updatedAt).getMonth()+1)
            let date=String (new Date(result[index].dataValues.updatedAt).getDate())
            let hours=String (new Date(result[index].dataValues.updatedAt).getHours()-8)
            let minutes=String (new Date(result[index].dataValues.updatedAt).getMinutes())
            let seconds=String (new Date(result[index].dataValues.updatedAt).getSeconds())
            let getdate=year+'-'+month+'-'+date+'  '+hours+':'+minutes+':'+seconds
               const jsonform={
                    name:result[index].dataValues.productname,
                    id:result[index].dataValues.productid,
                    amount:result[index].dataValues.numbers,
                    created:getdate,
                    price:result[index].dataValues.price
               }
               formdata.push(jsonform)
               
        }
       
        return formdata
    },
    getConfig: function () {
        return config
    },
    delete: async function(data,statuscode){
        if(statuscode==1){
            //delete on Product
            const result=await model.Product.destroy({
                where:{
                     productid:data.id,
                }
              
            })
            return ("delete done")
           
        }

    }
}

router.get('/login',async function(req,res,next){
    const name=req.query.username
    const statuscode=req.query.code
    const password=req.query.userpwd
    const User={
        name:name,
        password:password,
       
    }
    if(statuscode!=null){
   
   
    res.send(await model.searchdata(User,statuscode))  
    }
    else{
        console.log("error")
        res.send("statusCode:-1")
    }

}),
router.post('/products',async function(req,res,next){
    console.log(JSON.stringify(req.body.action))
    if(req.body.action=="renderdata"){
        res.send(await model.searchdata(null,2)) 
    }
   else if(req.body.action=="usingID"){
    let id=
    {
        id:req.body.id,
        name:null,
    }
    res.send(await model.searchdata(id,2)) 
   }
   else if(req.body.action=="usingname"){
    let name=
    {
        id:null,
        name:req.body.name,
    }
    res.send(await model.searchdata(name,2)) 
   }
   else if(req.body.action=="usingdel"){
    let product=
    {
        id:req.body.id,
        name:null,
        // res.send
    }
    res.send(await model.delete(product,1)) 
   }
   else if(req.body.action=="updating"){
    
        data={

            id:req.body.id,
            name:req.body.name,
            amount:parseInt(req.body.amount),
            price:parseFloat(req.body.price) 
        }
        await model.updateddata(data,1)
    res.send("updated successfully") 
   }
   else if(req.body.action=="adddata"){
    
    data={
        id:req.body.id,
        name:req.body.name,
        amount:parseInt(req.body.amount),
        price:parseFloat(req.body.price) 
    }
    await model.adddata(data,1)
res.send("updated successfully") 
}
    
})

router.post('/user',async function(req,res,next){
      let action=req.body.action
      console.log(JSON.stringify(req.body.action))
    if(req.body.action=="renderuser"){
        
     res.send(await model.searchdata(null,3)) 
    }
   
  
})
router.post('/client',async function(req,res,next){
    let action=req.body.action
    console.log(JSON.stringify(req.body.action))
  if(req.body.action=="createclient"){
      let data={
          productname:req.body.productname,
          client:req.body.client,
          id:req.body.productid,
          numbers:req.body.numbers,
          price:req.body.price,
      }
   res.send(await model.adddata(data,4)) 
  }
  if(req.body.action=="renderclient"){
    
    res.send(await model.searchdata(null,4)) 
}
 

})
// const { Op } = require("sequelize");
// Post.findAll({
//   where: {
//     [Op.or]: [
//       { authorId: 12 },
//       { authorId: 13 }
//     ]
//   }
// });OP比较符
// 创建一个新用户
// const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
// console.log("Jane's auto-generated ID:", jane.id);
// model.Admin.sync({alter:true})
// model.Admin.create({admin:"Smith",password:"123456"})
// model.Admin.create({admin:"Tom",password:"123456"})
// model.syncDatabase()
// model.delete("12093020",1)
// model.adddata(null,4)
// model.searchdata()
// model.handleRelationShip()
// model.syncDatabase()
// model.updateddata(null,null)
// "Client":{

//     clientname:{type:Sequelize.STRING,string:'clientname',allowNull: false},
//     ordersnumbers:{type:Sequelize.INTEGER,string:'numbers',allowNull:false},
//     ordersprice:{type:Sequelize.FLOAT,string:'price',allowNull:false},
//     productname:{
//         type:Sequelize.STRING,
//         string:'productname',
//         allowNull:false
//     },
//     id:{
//         type:Sequelize.INTEGER,
//         string:'id',
//         allowNull:false,
//         primaryKey:true,
//         autoIncrement:true,
//     },
    //  ProductProductid: {
    //           type: DataTypes.STRING,
    //           references: {
    //             model: "Product", 
    //             key: 'productid'
    //           }
    //         }
        
//     }
 //    const data=  model.searchdata(User,statuscode)
    // model.searchdata(User,statuscode)
    // .then(result=>{
    //     console.log(result)
    //     res.send(JSON.stringify(result))
    // })
    // .catch(e=>{
    //     console.log(e)
    // })
    //then方法（推荐还是await方法（只需要在路由function添加async声明即可））
    // console.log("result: ",await model.searchdata(User,statuscode))
module.exports = router;