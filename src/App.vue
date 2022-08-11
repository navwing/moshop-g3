<script >
import { RouterLink, RouterView } from 'vue-router'
// import NavBar from "./components/NavBar.vue";
// import EmployeeManagement from './views/EmployeeManagement/EmployeeManagement.vue';
// import Login from './views/Login.vue';
import EmployeeDetail from './views/EmployeeDetail/EmployeeDetail.vue';

export default{
  components:{EmployeeDetail }  // NavBar, EmployeeManagement, Login, 
}
</script>

<template>
  <!-- <NavBar/>
  <EmployeeManagement/>
  <Login/> -->
  <EmployeeDetail/>
</template>

<style scoped>

</style>
