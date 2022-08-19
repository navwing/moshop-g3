<template>
  <NavBar></NavBar>
  <section class="createUser pt-[24px] pb-[20px]">
    <div class="container mx-auto">
      <div class="flex justify-between mb-[36px]">
        <font-awesome-icon icon="fa-solid fa-angle-left" class="text-[#069255] text-[32px]" @click="$router.go(-1)"/>
        <button @click="handleSaveAll" class="bg-[#069255] hover:bg-[#218838] py-[7px] px-[52px] rounded-[20px] border-2 border-[#28a745] font-medium text-white text-[14px] cursor-pointer" type="submit">
          Lưu
        </button>
        <AfterSave @closeBtn="hiddenCloseBtn" :isShowSuccessAll="isShowSuccessAll" :isShowErrorAll="isShowErrorAll"/>
      </div>
      <AddNewUser @checkError="checkError" :isGetData="isGetData" @getDataAddNew="getDataAddNew"/>
      <div class="grid grid-cols-2">
        <AddJobInfo :workingAddress="workingAddress" @getDataAddJobInfo="getDataAddJobInfo" :isGetData="isGetData" @getDATW="getDATW" @getCTCO="getCTCO"/>
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
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
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
      isShowErrorAll: false,
      newPerson: {
        birthday: '',
        fullname: '',
        tel: '',
        password: '',
        live_address: '',
        avatar: '',
        work_first_date: '',
        work_address: '',
        work_time_repeats: [
          {
            start_time: '',
            end_time: '',
            repeats: [
              
            ]
          }
        ],
        screens: [

        ],
        pages: [],
        cmnd_images: [],
        syll_images: [],
        hdld_images: [],
        deleted_image_ids: []
      },
    };
  },
  methods: {
    checkError(isError){
      if(isError){
        this.isShowSuccessAll = true
      }
      console.log(this.isShowSuccessAll);
    },
    hiddenCloseBtn(){
      this.isShowSuccessAll = false
    },
    handleSaveAll() {
      this.isGetData = !this.isGetData;
      // console.log(this.isGetData)
    },
    getDataAddNew(userInfo){
      if (userInfo.isErrorName === false || userInfo.isErrorPhone === false || userInfo.isErrorPassword === false) {
        this.isShowErrorAll = !this.isShowErrorAll
        console.log(this.isShowErrorAll);
      } else {
        // this.checkError(this.isError)
        this.isShowSuccessAll = !this.isShowSuccessAll;
        this.newPerson.fullname = userInfo.name;
        this.newPerson.tel = userInfo.phone;
        this.newPerson.password = userInfo.password;
        this.newPerson.live_address = userInfo.live_address;
        this.newPerson.birthday = userInfo.birthday;
        console.log(this.newPerson);
      }
    },
    getDataAddJobInfo(userInfo){
      this.newPerson.work_first_date = userInfo.work_first_date;
      this.newPerson.work_address = userInfo.addressCurrent;
      this.newPerson.screens = userInfo.listScreen;
      console.log(this.newPerson)
      // console.log(userInfo);
    },
    getDATW(userInfo){
      this.newPerson.work_time_repeats.start_time = userInfo.start_time;
      this.newPerson.work_time_repeats.end_time = userInfo.end_time;
      this.newPerson.work_time_repeats.repeats = userInfo.listRepeatDate;
      console.log(this.newPerson)
    },
    getCTCO(userInfo){
      this.newPerson.pages = userInfo;
      console.log(this.newPerson.pages);
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    axios 
      .get("https://x.ghtk.vn/api/fulfilment/v1/shops/get-pick-addresses", {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
        },
      })
      .then((response) => {
        this.workingAddress = (response.data.data.map(element => element.address))
        console.log(this.workingAddress);
      })
      .catch(function(error) {
        console.log(error);
      });
    // axios
    //   .post("http://x.ghtk.vn/api/v2/staff/create", {
        
    //   })
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