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
              <input id="onlALl" type="radio" value="all" v-model="KpiOnl"
                     class=" checked:bg-default_green cursor-pointer ">
              <label for="onlALl">Nhận tất cả hội thoại</label>
            </div>
            <div class="onlineSetting__item">
              <input id="onlShareWork" type="radio" value="share_work" v-model="KpiOnl">
              <label for="onlShareWork">Nhận phần hội thoại được chia đều</label>
            </div>
            <div class="onlineSetting__item">
              <input  id="onlFirstView" type="radio" value="first_view" v-model="KpiOnl">
              <label for="onlFirstView">Nhận phần hội thoại bấm xem trước tiên</label>
            </div>
            <div class="onlineSetting__item">
              <input id="onlFirstReply" type="radio" value="first_reply" v-model="KpiOnl">
              <label for="onlFirstReply">Nhận phần hội thoại trả lời trước tiên</label>
            </div>
            <div class="onlineSetting__item">
              <input id="onlFirstDeal" type="radio" value="first_deal" v-model="KpiOnl">
              <label for="onlFirstDeal">Nhận phần hội thoại chốt đơn trước tiên</label>
            </div>
          </div>
          <div class="offlineSetting" v-if="KpiOnl!=='all'">
            <div class="offlineSetting__title">
              NV offline
            </div>
            <div class="offlineSetting__item">
              <input id="offKeep" type="radio" value="keep" v-model="KpiOff">
              <label for="offKeep">Tiếp tục hội thoại sau khi offline</label>
            </div>
            <div class="offlineSetting__item">
              <input id="offShare" type="radio" value="share" v-model="KpiOff">
              <label for="offShare">Chuyển hội thoại chưa trả lời cho nhân viên</label>
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
    return {};
  },
  props: ['KpiOff', 'KpiOnl'],
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

        if (resOnl.data.success && resOff.data.success) {
          this.$toast.success(resOnl.data.message);
        } else {
          this.$toast.error("Đã có lỗi xảy ra");
        }
      } catch (err) {
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