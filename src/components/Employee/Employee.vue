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
                <div class="dropdown__status__item" @click="changeEmployeeStatus(1)">
                  <div class="dropdown__status__item--active">
                    <img src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg" alt="statusCheck"
                         v-if="employeeStatus==='active'">
                  </div>
                  <div>Đang làm việc</div>
                </div>
                <div class="dropdown__status__item" @click="changeEmployeeStatus(0)">
                  <div class="dropdown__status__item--active">
                    <img src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg" alt="statusCheck"
                         v-if="employeeStatus==='temporaryBreak'">
                  </div>
                  <div>Nghỉ tạm thời</div>
                </div>
                <div class="dropdown__status__item " style="margin-bottom: 0px"
                     @click="changeEmployeeStatus(2)">
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
          <div class="staff__name text-left">{{ staff.fullname }}</div>
          <ul class="staff-center__screen text-left" v-for="screen in staff.screens">
            <li>{{ screenCheck[screen] }}</li>

          </ul>
        </div>
      </div>
      <div class="staff-right">
        <!-- <router-link to="/detail">Xem</router-link> -->
        <router-link :to="{path:'/detail/'+staff.id}" class="viewButton">Xem</router-link>
      </div>
    </div>
  </td>
  <td class="border border-slate">{{ staff.work_result.customer }}</td>
  <td class="border border-slate">{{ staff.work_result.customer_has_phone }}</td>
  <td class="border border-slate">{{ staff.work_result.customer_deal }}</td>
  <td class="border border-slate">{{ staff.work_result.call_log }}</td>
  <td class="border border-slate">{{ staff.work_result.rate_order }}%</td>
  <td class="border border-slate">{{ staff.work_result.order_success }}</td>
  <td class="border border-slate">{{ staff.work_result.order_return }}</td>
  <td class="border border-slate">{{ staff.work_result.revenue }}đ</td>
  <td class="border border-slate">{{ staff.work_result.fee }}đ</td>
  <td class="border border-slate">{{ staff.work_result.time_reply }}s</td>
</template>

<script>
import {useStaffStore} from "../../stores/StaffStore";
import {mapActions, mapState} from "pinia";

export default {
  name: "Employee",
  data() {
    return {
      openDropDown: false,
      screenCheck: {
        sale: "Chat chốt đơn",
        order: "Đơn hàng",
        statistic: "Tổng quan",
        product: "Kho và sản phẩm",
        chat_ops: "Chat vận hành",
        customer: "Khách hàng",
        staff: "Nhân viên",
      }
    };
  },
  props: {
    staff: {
      type: Object,
      required: true,

    }
  },
  computed: {
    employeeStatus() {
      if (this.staff.active === 1) {
        return 'active';
      } else if (this.staff.active === 0) {
        return 'temporaryBreak';
      } else if (this.staff.active === 2) {
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
    ...mapState(useStaffStore, ['toastMessage'])
  },
  methods: {
    ...mapActions(useStaffStore, {changeStatus: 'updateStaffStatus'}),
    async changeEmployeeStatus(status) {
      this.openDropDown = !this.openDropDown;
      await this.changeStatus(this.staff.id, status);
      console.log(this.toastMessage.type);
      this.$toast.show(this.toastMessage.message, {
        type: this.toastMessage.type,
      });
    },
  },

}
</script>

<style scoped>
@import "Employee.css";
</style>

