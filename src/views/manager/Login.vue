<template class="hold-transition login-page">
<div class="tagbody">
     <div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form  method="get">
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email" v-model="useremail" >
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password"  v-model="userpassword">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button @click="logincheck()" type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
       {{reversedMessage()}}
      <div class="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>
      <!-- /.social-auth-links -->

      <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p class="mb-0">
        <a href="register.html" class="text-center">Register a new membership</a>
      </p>
    </div>
   
    <!-- /.login-card-body -->
  </div>
</div>
</div>
</template>

<script>
  // eslint-disable-next-line
import axios from 'axios'
  // eslint-disable-next-line
import {jq} from '../../../bower_components/admin-lte/plugins/jquery/jquery.min.js'
// eslint-disable-next-line
import {admn} from '../../../bower_components/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
// eslint-disable-next-line
import {admil} from '../../../bower_components/admin-lte/dist/js/adminlte.min.js'
export default {
data() {
  
    return {
        useremail:'',
        userpassword:'',
        message: 'Hello'
     
    }
    
},
methods:{
           logincheck(){
           let that=this;
           let code=1
           let username=this.useremail
           let userpwd=this.userpassword
           //进行cookies判断
            // eslint-disable-next-line
        //    var Token=this.getCookie("token");
           console.log(username+userpwd)
           if(username!=null&&userpwd!=null){
           let url="http://localhost:3001/admin/login?username="+username
           +"&userpwd="+userpwd
           +"&code="+code
        //    +"&token="+Token
          
           axios
           .get(url)
           .then(function(res){

               console.log(res.data)
               if(res.data.statusCode==1){
                    
                //    that.$emit("existuser")
                 sessionStorage.setItem("Userinfo", JSON.stringify(res.data))
                //  that.setcookie("token",res.data.token,300)
                 that.$router.push('/manage')
                   

               }else if(res.data=="statusCode:-1"){

                   alert("用户名不对或者账号错误")
               }
           })
           .catch(function(e){
               console.log(e)
           })

           }else{
               alert("你的账号或者密码为输入不完整!")
           }

       },
        getCookie(userName){
      if (document.cookie.length>0){
        let c_start=document.cookie.indexOf(userName+ "=");
        if (c_start!=-1){
          c_start=c_start + userName.length+1;
        let  c_end=document.cookie.indexOf(";",c_start);
          if (c_end==-1){ 
              c_end=document.cookie.length;
          }
          return unescape(document.cookie.substring(c_start,c_end));
        }
     }
    return null;
     
},
reversedMessage(){
  return this.useremail.split('').reverse().join('')
}
},
//methods
// computed: {
//     // 计算属性的 getter
//     reversedMessage: function () {
//       // `this` 指向 vm 实例
//       return this.useremail.split('').reverse().join('')
//     }
//   },
  //computed



}
</script>

<style scoped src="../../../bower_components/admin-lte/plugins/fontawesome-free/css/all.min.css"></style>
<style scoped src="../../../bower_components/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css"></style>
<style scoped src="../../../bower_components/admin-lte/dist/css/adminlte.min.css"></style>
<style  scoped>
.tagbody{
    padding: 5%;
    padding-left:35% ;
}
</style>