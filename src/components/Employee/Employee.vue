<template>
  <td class="border border-slate">
    <div class="staff flex flex-wrap justify-between">
      <div class="staff-info flex flex-wrap">
        <div class="staff-left ">
          <div class="staff-left__avatar flex justify-center">
            <img
                :src=staff.avatar
                alt="">
          </div>
          <div class="staff__status">
            <div class="dropdown relative" :class="employeeStatus">
              <button @click="openDropDown=!openDropDown">{{ employeeStatusText }}
                <font-awesome-icon icon="fa-solid fa-angle-down" class="ml-1"/>
              </button>
              <div class="dropdown__status absolute" v-show="openDropDown">
                <div class="dropdown__status__item" @click="changeEmployeeStatus('active')">
                  <div class="dropdown__status__item--active">
                    <img src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg" alt="statusCheck"
                         v-if="employeeStatus==='active'">
                  </div>
                  <div>Đang làm việc</div>
                </div>
                <div class="dropdown__status__item" @click="changeEmployeeStatus('temporaryBreak')">
                  <div class="dropdown__status__item--active">
                    <img src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg" alt="statusCheck"
                         v-if="employeeStatus==='temporaryBreak'">
                  </div>
                  <div>Nghỉ tạm thời</div>
                </div>
                <div class="dropdown__status__item " style="margin-bottom: 0px"
                     @click="changeEmployeeStatus('retired')">
                  <div class="dropdown__status__item--active">
                    <img src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg" alt="statusCheck"
                         v-if="employeeStatus==='retired'">
                  </div>
                  <div>Đã nghỉ việc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staff-center pl-2">
          <div class="staff__name text-left">{{staff.fullname}}</div>
          <ul class="staff-center__screen text-left">
            <li>Đơn hàng</li>
            <li>Chats vận hành</li>
            <li>Tổng quan</li>
            <li>Khách hàng</li>
            <li>Nhân viên</li>
          </ul>
        </div>
      </div>
      <div class="staff-right">
        <a href="#" class="viewButton">Xem</a>
      </div>
    </div>
  </td>
  <td class="border border-slate">{{staff.work_result.customer}}</td>
  <td class="border border-slate">{{staff.work_result.customer_has_phone}}</td>
  <td class="border border-slate">{{staff.work_result.customer_deal}}</td>
  <td class="border border-slate">{{staff.work_result.order_success}}</td>
  <td class="border border-slate">{{staff.work_result.rate_order}}%</td>
  <td class="border border-slate">{{staff.work_result.call_log}}</td>
  <td class="border border-slate">{{staff.work_result.order_return}}</td>
  <td class="border border-slate">{{staff.work_result.revenue}}đ</td>
  <td class="border border-slate">{{staff.work_result.fee}}đ</td>
  <td class="border border-slate">{{staff.work_result.time_reply}}s</td>
</template>

<script>
export default {
  name: "Employee",
  data() {
    return {
      openDropDown: false,

    };
  },
  props: {
    staff: {
      type: Object,
      required: true
    }
  },
  computed: {
    employeeStatus() {
      if(this.staff.active === 1) {
        return 'active';
      } else if(this.staff.active === 2) {
        return 'temporaryBreak';
      } else if(this.staff.active === 0) {
        return 'retired';
      }
    },
    employeeStatusText() {
      if (this.employeeStatus === 'active') {
        return 'Đang làm việc';
      } else if (this.employeeStatus === 'temporaryBreak') {
        return 'Nghỉ tạm thời';
      } else if (this.employeeStatus === 'retired') {
        return 'Đã nghỉ việc';
      }
    },
  },
  methods: {
    changeEmployeeStatus(status) {
      this.openDropDown = !this.openDropDown;
      this.employeeStatus = status;
    },
  },
  mounted() {
    console.log(this.staff)
  }
}
</script>

<style scoped>
@import "Employee.css";
</style>