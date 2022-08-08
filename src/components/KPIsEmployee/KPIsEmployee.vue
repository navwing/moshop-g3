<template>
  <div >
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
              <input type="radio" value="1" v-model="onlineSetting">
              <span>Nhận tất cả hội thoại</span>
            </div>
            <div class="onlineSetting__item">
              <input type="radio" value="2" v-model="onlineSetting">
              <span>Nhận phần hội thoại được chia đều</span>
            </div>
            <div class="onlineSetting__item">
              <input type="radio" value="3" v-model="onlineSetting">
              <span>Nhận phần hội thoại bấm xem trước tiên</span>
            </div>
            <div class="onlineSetting__item">
              <input type="radio" value="4" v-model="onlineSetting">
              <span>Nhận phần hội thoại trả lời trước tiên</span>
            </div>
            <div class="onlineSetting__item">
              <input type="radio" value="5" v-model="onlineSetting">
              <span>Nhận phần hội thoại chốt đơn trước tiên</span>
            </div>
          </div>
          <div class="offlineSetting" v-if="onlineSetting!=1">
            <div class="offlineSetting__title">
              NV offline
            </div>
            <div class="offlineSetting__item">
              <input type="radio" value="1" v-model="offlineSetting">
              <span>Tiếp tục hội thoại sau khi offline</span>
            </div>
            <div class="offlineSetting__item">
              <input type="radio" value="2" v-model="offlineSetting">
              <span>Chuyển hội thoại chưa trả lời cho nhân viên</span>
            </div>
          </div>
          <footer class="modal-footer">
            <button class="saveBtn">Lưu</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KPIsEmployee",
  data() {
    return {
      onlineSetting:0,
      offlineSetting:1,
    };
  },
}
</script>

<style scoped>
@import url("KPIsEmloyee.css");
</style>