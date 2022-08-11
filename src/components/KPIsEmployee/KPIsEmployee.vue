<template>
  <div>
    <div class="wrapModal" @click="$emit('closeModal')"></div>
    <div class="kpiModal">
      <div class="modal-content flex flex-col">
        <div class="modal-header flex items-start justify-between">
          <h5 class="m-auto">Cài đặt KPIs nhân viên</h5>
          <button class="closeButton" @click="$emit('closeModal')">×</button>
        </div>
        <div class="modal-body">
          <div class="setting-title flex items-center">
            Phân công NV chat
          </div>
          <div class="onlineSetting">
            <div class="onlineSetting__title">
              NV online
            </div>
            <div class="onlineSetting__item">
              <input type="radio" value="all" v-model="KpiOnl">
              <span>Nhận tất cả hội thoại</span>
            </div>
            <div class="onlineSetting__item">
              <input type="radio" value="share_work" v-model="KpiOnl">
              <span>Nhận phần hội thoại được chia đều</span>
            </div>
            <div class="onlineSetting__item">
              <input type="radio" value="first_view" v-model="KpiOnl">
              <span>Nhận phần hội thoại bấm xem trước tiên</span>
            </div>
            <div class="onlineSetting__item">
              <input type="radio" value="first_reply" v-model="KpiOnl">
              <span>Nhận phần hội thoại trả lời trước tiên</span>
            </div>
            <div class="onlineSetting__item">
              <input type="radio" value="first_deal" v-model="KpiOnl">
              <span>Nhận phần hội thoại chốt đơn trước tiên</span>
            </div>
          </div>
          <div class="offlineSetting" v-if="KpiOnl!=='all'">
            <div class="offlineSetting__title">
              NV offline
            </div>
            <div class="offlineSetting__item">
              <input type="radio" value="keep" v-model="KpiOff">
              <span>Tiếp tục hội thoại sau khi offline</span>
            </div>
            <div class="offlineSetting__item">
              <input type="radio" value="share" v-model="KpiOff">
              <span>Chuyển hội thoại chưa trả lời cho nhân viên</span>
            </div>
          </div>
          <footer class="modal-footer">
            <button class="saveBtn" @click="()=>{updateKPIs(),$emit('closeModal')}">Lưu</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "KPIsEmployee",
  data() {
    return {

    };
  },
  props:['KpiOff','KpiOnl'],
  methods: {
    async updateKPIs() {
      try {
        let resOnl = await axios.post("https://x.ghtk.vn/api/v2/staff/update-online-message-type", {
          message_type: this.KpiOnl,
        }, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken")
          }
        });
        let resOff = await axios.post("https://x.ghtk.vn/api/v2/staff/update-offline-message-type", {
          message_type: this.KpiOff,
        }, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken")
          }
        });

      }
      catch (err) {
        console.log(err);
      }
    },

  },
  mounted() {

  }
}
</script>

<style scoped>
@import url("KPIsEmloyee.css");
</style>