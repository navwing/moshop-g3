
<script >
import { RouterLink, RouterView } from 'vue-router'
import EmployeeDetail from './views/EmployeeDetail/EmployeeDetail.vue';

export default{
  components:{EmployeeDetail }  // NavBar, EmployeeManagement, Login, 
}
</script>

<template>
  <div class="mobile pt-40">
    <h2 class="text-center text-3xl ">Vui lòng tải ứng dụng <br> để có trải nghiệm tốt nhất</h2>
    <div class="downloadButtonList flex justify-center items-center justify-evenly">
      <a href="https://play.google.com/store/apps/details?id=com.ghtk.xproject" >
        <img src="https://w7.pngwing.com/pngs/696/500/png-transparent-google-play-mobile-phones-google-search-google-text-logo-sign.png" alt="google play">
      </a>
      <a href="https://apps.apple.com/us/app/moshop-b%C3%A1n-h%C3%A0ng-chuy%C3%AAn-nghi%E1%BB%87p/id1479502357">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="apple store">
      </a>
    </div>
  </div>
  <div class="laptop">
    <router-view ></router-view>
  </div>
</template>
<style scoped>
@media(max-width: 500px){
  .mobile{
    display: block;
  }
  .downloadButtonList a{
    width: 30%;
    height: 100%;
    animation: buttonRotate 1.2s infinite;

  }
  .laptop{
    display: none;
  }
}
@media(min-width: 501px){
  .mobile{
    display: none;
  }
  .laptop{
    display: block;
  }
}
@keyframes buttonRotate {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100%{
    transform: rotate(-10deg);
  }
}
</style>