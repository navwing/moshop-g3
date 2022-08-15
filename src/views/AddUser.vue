<template>
  <section class="createUser pt-[24px] pb-[20px]">
    <div class="container mx-auto">
      <div class="flex justify-between mb-[36px]">
        <font-awesome-icon icon="fa-solid fa-angle-left" class="text-[#069255] text-[32px]"/>
        <button @click="handleSaveAll" class="bg-[#069255] hover:bg-[#218838] py-[7px] px-[52px] rounded-[20px] border-2 border-[#28a745] font-medium text-white text-[14px] cursor-pointer" type="submit">
          Lưu
        </button>
        <AfterSave :isShowSuccessAll="isShowSuccessAll" :isShowErrorAll="isShowErrorAll"/>
      </div>
      <AddNewUser @getDataAddNew="getDataAddNew" :isGetData="isGetData"/>
      <div class="grid grid-cols-2">
        <AddJobInfo :workingAddress="workingAddress"/>
        <AddNewProfile/>
      </div>
    </div>
  </section>
</template>
<script>
import AfterSave from "../components/AfterSave.vue"
import AddNewUser from "../components/AddNewUser.vue";
import AddNewProfile from "../components/AddNewProfile.vue";
import AddJobInfo from "../components/AddJobInfo.vue";
import axios from "axios";
export default {
  components: {
    AfterSave,
    AddNewUser,
    AddNewProfile,
    AddJobInfo,
  },
  data() {
    return {
      workingAddress: '',
      // test: "hello"
      isGetData: true,
      isShowSuccessAll: false,
      isShowErrorAll: false
    };
  },
  methods: {
    handleSaveAll() {
      console.log(this.isGetData)
      this.isGetData = !this.isGetData
    },
    getDataAddNew(userInfo){
      console.log(userInfo);
      if (!userInfo.name) {
        this.isShowErrorAll = !this.isShowErrorAll
      } else if (!userInfo.phone) {
        this.isShowSuccessAll = !this.isShowSuccessAll
      }
    }
  },
  mounted() {
    axios 
      .get("https://x.ghtk.vn/api/fulfilment/v1/shops/get-pick-addresses", {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
        },
      })
      .then((response) => {
        // this.workingAddress = (response.data.data.find(element => element.id == 3606788)).address
        this.workingAddress = (response.data.data.map(element => element.address))
        console.log(this.workingAddress);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>