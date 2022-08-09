<template>
  <div >
    <div class="wrapModal" @click="$emit('closeFilter')"></div>
    <div class="filterModal">
      <div class="modal-content flex flex-col">
        <div class="modal-header flex items-start justify-between">
          <h5 class="m-auto">Tùy chọn hiển thị</h5>
        </div>
        <div class="modal-body">
          <div class="date-picker text-center p-4">
            <div class="date-picker__wrap ">
              <input type="date" placeholder="Chọn ngày bắt đầu" >
              <font-awesome-icon icon="fa-regular fa-calendar" />
            </div>
            <div class="date-picker__wrap">
              <input type="date" placeholder="Chọn ngày bắt đầu" >
              <font-awesome-icon icon="fa-regular fa-calendar" />
            </div>
          </div>
          <footer class="modal-footer">
            <button class="acceptBtn btn">Xác nhận</button>
            <button class="cancelBtn btn mt-1" @click="$emit('closeFilter')">Hủy bỏ</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingFilter"
}
</script>

<style scoped>
@import url('SettingFilter.css');
</style>