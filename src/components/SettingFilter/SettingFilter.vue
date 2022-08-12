<template>
  <div>
    <div class="wrapModal" @click="$emit('closeFilter')"></div>
    <div class="filterModal">
      <div class="modal-content flex flex-col">
        <div class="modal-header flex items-start justify-between">
          <h5 class="m-auto">Tùy chọn hiển thị</h5>
        </div>
        <div class="modal-body">
          <div class="date-picker text-center p-4">
            <div class="date-picker__wrap ">
              <input type="date" placeholder="Chọn ngày bắt đầu" v-model="startDay">
            </div>
            <div class="date-picker__wrap">
              <input type="date" placeholder="Chọn ngày bắt đầu" v-model="endDay">
            </div>
          </div>
          <footer class="modal-footer">
            <button class="acceptBtn btn disabled:bg-grey" @click="getListFilterStaff()" :disabled="isDisable">Xác nhận</button>
            <button class="cancelBtn btn mt-1" @click="$emit('closeFilter')">Hủy bỏ</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useStaffStore} from "../../stores/StaffStore";
import {mapActions} from "pinia";

export default {
  name: "SettingFilter",
  data() {
    return {
      startDay: "",
      endDay: "",
    };
  },
  computed: {
    isDisable() {
     if(this.startDay === "" || this.endDay === "") {
       return true;
     } else {
       return false;
     }
    }
  },
  methods: {
    ...mapActions(useStaffStore, ["getListStaff"]),
    ...mapActions(useStaffStore, ["changeDateGet"]),
    getListFilterStaff() {
      this.changeDateGet(this.startDay, this.endDay);
      this.getListStaff();
    }
  }
}
</script>

<style scoped>
@import url('SettingFilter.css');
</style>