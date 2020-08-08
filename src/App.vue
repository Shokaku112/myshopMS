<template>
  <div id="app">
     <!-- <Topbar v-on:isLeft="getlog()" v-if="isactivated"></Topbar> -->
      <router-view :key="$route.fullPath"/>
      <!-- //router模式 -->
     
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'


// import Topbar from '../src/views/topbar/topbar'
export default {
  // components:{Topbar},
  // name: 'App',
  data() {
    return {
      isactivated:true
    }
  },
  methods: {
    getlog(){
    alert("notification from App.vue:user is jump to userinfomation")
     
    },
    live2dload () {
     console.log("enter")
      
        //  window.L2Dwidget.init({
         
        //   pluginRootPath: 'packages/',
        //   pluginJsPath: '../public',
        //   pluginModelPath: "http://localhost:8080/live2d-widget-model-koharu/assets",
        //   tagMode: false,
        //   debug: false,
        //   model: { "jsonPath": "http://localhost:8080/live2d/live2d-widget-model-koharu/assets/koharu.model.json" },
        //   display: { position: 'right', width: 200, height: 450 },
        //   mobile: { show: true },
        //   log: false
        //   })
     
      window.L2Dwidget.init({
        "display": {
              "superSample": 1,
              "width": 200,
              "height": 400,
              "position": "right",
              "hOffset": 0,
              "vOffset": 0
          }
      });
  },
    
     
  },

  
 
  
  mounted() {
     // eslint-disable-next-line
      this.bus.$on('isLeft', (val) => {
       this.getlog()
      });
    },
    created() {
      this.live2dload()
    },
    
  
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

</style>
