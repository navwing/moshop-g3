<template>
  <div v-show="isShowChat" class="mt-[6px]">
    <div v-for="(item, index) in listPage" :key="index">
      <div class="flex items-center ml-[35px] mb-[16px]">
        <input v-model="listPageSelect" :value="item.pid"
          class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]"
          type="checkbox"
        />
        <img 
          :src="item.avatar"
          class="w-[30px] h-[30px] bg-[#c3c3c3] rounded-full mr-[4px]"
        /> {{item.name}}
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: [
    "isShowChat",
    "isGetData"
  ],
  data() {
    return {
      listPage: [],
      listPageSelect: []
    };
  },
  mounted() {
    axios
      .get("https://wh.ghtk.vn/api/v3/page/get-all-page-by-shop-code", {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
        },
      })
      .then((response) => {
        this.listPage = response.data.data.pages;
        console.log(this.listPage[0].id);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  watch: {
    isGetData(){
      this.$emit('getCTCO', this.listPageSelect)
      console.log(this.listPageSelect)
    }
  }
};
</script>
<style></style>
