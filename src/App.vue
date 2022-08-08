<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue";
import EmployeeManagement from "./views/EmployeeManagement/EmployeeManagement.vue";
</script>

<template>
  <NavBar/>
  <div class="main-content">
    <div class="page">
      <EmployeeManagement/>
    </div>
  </div>
</template>

<style scoped>
.main-content{
  overflow: auto;
  min-height: calc(100% - 48px);
}
.page{
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>
