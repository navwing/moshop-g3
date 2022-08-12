<template>
  <KPIsEmployee v-show="openKpiModal" @closeModal="closeModal" :KpiOnl="KpiOnl" :KpiOff="KpiOff"/>
  <SettingFilter v-show="openSettingFilter" @closeFilter="closeSettingFilter"/>
  <NavBar />
  <div class="container">
    <div class="row page__header flex">
      <div class="left-content">
        <div class="info flex items-center">
          <h2 class="info-title" >Quản lý nhân viên </h2>
          <div class="live">
            <div class="signal flex items-center justify-center relative">
              <div class="dot-signal"></div>
              <div class="circle-signal circle-1 absolute"></div>
              <div class="circle-signal circle-2 absolute"></div>
            </div>

          </div>
          <div class="pl-4" style="font-style: italic;">
            Live (cập nhật {{ updateTime.hour }}:{{ updateTime.minute }} )
          </div>
        </div>
        <div class="filter">
          <button class="filter-btn " :class="renderType==='today'?'active':''" @click="changeRenderDate('today')">Hôm
            nay
          </button>
          <button class="filter-btn " :class="renderType==='thisWeek'?'active':''"
                  @click="changeRenderDate('thisWeek')">Tuần
            này
          </button>
          <button class="filter-btn " :class="renderType==='thisMonth'?'active':''"
                  @click="changeRenderDate('thisMonth')">
            Tháng
            này
          </button>
          <button class="filter-btn " @click="changeRenderDate('custom')"
                  :class="renderType==='custom'?'active':''">Tùy chọn
          </button>
        </div>
      </div>
      <div class=" right-content
          ">
        <div class="action flex items-end flex-wrap  flex-col">
          <button class="btn-utility" @click="()=>{openKpiModal=!openKpiModal;getKPIs()}">
            <font-awesome-icon icon="fa-solid fa-gear"/>
            <span>KPIs nhân viên</span>
          </button>
          <a href="#" class="btn-utility">
            <font-awesome-icon icon="fa-solid fa-plus"/>
            <span> Thêm nhân viên</span>
          </a>
        </div>
      </div>
    </div>
    <div class="scroll-table">
      <table class="table-auto w-full border-collapse border border-slate">
        <thead>
        <tr>
          <th class="w-1/4 " style="font-weight: 500">Nhân viên</th>
          <th class=" font-semibold ">
            <div class="table-header">
              <div class="head-title" v-tooltip="'Sô khách nhắn tin, bình luận NV nhận'">KH tương tác</div>
              <div class="head-sort flex items-center">
                <div class="head-sort__incr">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" class="pb-1.5"/>
                </div>
                <div class="head-sort__decr">
                  <font-awesome-icon icon="fa-solid fa-arrow-down" class="pt-1.5"/>
                </div>
              </div>
            </div>
          </th>
          <th class="font-semibold ">
            <div class="table-header">
              <div class="head-title" v-tooltip="'Số khách nhắn tin, bình luận cho SĐT'"> KH có SĐT</div>
              <div class="head-sort flex items-center">
                <div class="head-sort__incr">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" class="pb-1.5"/>
                </div>
                <div class="head-sort__decr">
                  <font-awesome-icon icon="fa-solid fa-arrow-down" class="pt-1.5"/>
                </div>
              </div>
            </div>
          </th>
          <th class="font-semibold ">
            <div class="table-header">
              <div class="head-title" v-tooltip="'Số khách nhân viên đã gọi'">KH đã gọi</div>
              <div class="head-sort flex items-center">
                <div class="head-sort__incr">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" class="pb-1.5"/>
                </div>
                <div class="head-sort__decr">
                  <font-awesome-icon icon="fa-solid fa-arrow-down" class="pt-1.5"/>
                </div>
              </div>
            </div>

          </th>
          <th class="font-semibold ">
            <div class="table-header">
              <div class="head-title" v-tooltip="'Số đơn nhân viên đã chốt'">ĐH đã chốt</div>
              <div class="head-sort flex items-center">
                <div class="head-sort__incr">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" class="pb-1.5"/>
                </div>
                <div class="head-sort__decr">
                  <font-awesome-icon icon="fa-solid fa-arrow-down" class="pt-1.5"/>
                </div>
              </div>
            </div>

          </th>
          <th class="font-semibold ">
            <div class="table-header">
              <div class="head-title" v-tooltip="'ĐH đã chốt / (KH tương tác + KH đã gọi)'">Tỷ lệ chốt</div>
              <div class="head-sort flex items-center">
                <div class="head-sort__incr">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" class="pb-1.5"/>
                </div>
                <div class="head-sort__decr">
                  <font-awesome-icon icon="fa-solid fa-arrow-down" class="pt-1.5"/>
                </div>
              </div>
            </div>

          </th>
          <th class="font-semibold ">
            <div class="table-header">
              <div class="head-title" v-tooltip="'Số đơn giao thành công của NV'">ĐH thành công</div>
              <div class="head-sort flex items-center">
                <div class="head-sort__incr">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" class="pb-1.5"/>
                </div>
                <div class="head-sort__decr">
                  <font-awesome-icon icon="fa-solid fa-arrow-down" class="pt-1.5"/>
                </div>
              </div>
            </div>

          </th>
          <th class="font-semibold ">
            <div class="table-header">
              <div class="head-title" v-tooltip="'Số đơn bị hoàn trả của NV'">ĐH hoàn</div>
              <div class="head-sort flex items-center">
                <div class="head-sort__incr">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" class="pb-1.5"/>
                </div>
                <div class="head-sort__decr">
                  <font-awesome-icon icon="fa-solid fa-arrow-down" class="pt-1.5"/>
                </div>
              </div>
            </div>

          </th>
          <th class="font-semibold ">
            <div class="table-header">
              <div class="head-title" v-tooltip="'Giá trị đơn giao thành công của NV'">Doanh thu</div>
              <div class="head-sort flex items-center">
                <div class="head-sort__incr">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" class="pb-1.5"/>
                </div>
                <div class="head-sort__decr">
                  <font-awesome-icon icon="fa-solid fa-arrow-down" class="pt-1.5"/>
                </div>
              </div>
            </div>
          </th>
          <th class="font-semibold ">
            <div class="table-header">
              <div class="head-title" v-tooltip="'Phí ship đơn hoàn của NV  '">Phí hoàn</div>
              <div class="head-sort flex items-center">
                <div class="head-sort__incr">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" class="pb-1.5"/>
                </div>
                <div class="head-sort__decr">
                  <font-awesome-icon icon="fa-solid fa-arrow-down" class="pt-1.5"/>
                </div>
              </div>
            </div>

          </th>
          <th class="font-semibold ">
            <div class="table-header">
              <div class="head-title" v-tooltip="'Trung bình thời gian trả lời tin nhắn của NV'">TG phản hồi TB</div>
              <div class="head-sort flex items-center">
                <div class="head-sort__incr">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" class="pb-1.5"/>
                </div>
                <div class="head-sort__decr">
                  <font-awesome-icon icon="fa-solid fa-arrow-down" class="pt-1.5"/>
                </div>
              </div>
            </div>

          </th>
        </tr>
        </thead>
        <tbody class="text-center">
        <tr v-for="staff in listStaff">
          <Employee :staff="staff"/>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {startOfDay, endOfDay, format, startOfWeek, endOfWeek, startOfMonth, endOfMonth} from "date-fns";
import Employee from "../../components/Employee/Employee.vue";
import KPIsEmployee from "../../components/KPIsEmployee/KPIsEmployee.vue";
import SettingFilter from "../../components/SettingFilter/SettingFilter.vue";
import NavBar from "../../components/NavBar.vue";
import {useStaffStore} from "../../stores/StaffStore";
import {mapActions, mapState} from "pinia";
import axios from "axios";

export default {
  name: "EmployeeManagement",
  components: {
    Employee,
    KPIsEmployee,
    SettingFilter,
    NavBar

  },
  data() {
    return {
      test1: '',
      openKpiModal: false,
      openSettingFilter: false,
      KpiOnl: "",
      KpiOff: "",
      renderType: 'today',
      startDay: format(startOfDay(new Date()), 'yyyy-MM-dd'),
      endDay: format(endOfDay(new Date()), 'yyyy-MM-dd'),
    };
  },
  computed: {
    ...mapState(useStaffStore, ['listStaff']),
    ...mapState(useStaffStore, ["updateTime"]),

  },
  methods: {
    ...mapActions(useStaffStore, ["getListStaff"]),
    ...mapActions(useStaffStore, ["changeDateGet"]),
    changeRenderDate(method) {
      if (method === 'today') {
        this.renderType = method;
        this.startDay = format(startOfDay(new Date()), 'yyyy-MM-dd');
        this.endDay = format(endOfDay(new Date()), 'yyyy-MM-dd');
        this.changeDateGet(this.startDay, this.endDay);
        this.getListStaff();

      }
      if (method === "thisWeek") {
        this.renderType = method;
        this.startDay = format(startOfWeek(new Date()), 'yyyy-MM-dd');
        this.endDay = format(endOfWeek(new Date()), 'yyyy-MM-dd');
        this.changeDateGet(this.startDay, this.endDay);
        this.getListStaff();

      }
      if (method === "thisMonth") {
        this.renderType = method;
        this.startDay = format(startOfMonth(new Date()), 'yyyy-MM-dd');
        this.endDay = format(endOfMonth(new Date()), 'yyyy-MM-dd');
        this.changeDateGet(this.startDay, this.endDay);
        this.getListStaff();

      }
      if (method === "custom") {
        this.renderType = method;
        this.openSettingFilter = !this.openSettingFilter;
      }
    },
    closeModal() {
      this.openKpiModal = false;
    },
    closeSettingFilter() {
      this.openSettingFilter = false;
    },
    async getKPIs() {
      try {
        let res = await axios.get("https://x.ghtk.vn/api/v2/staff/get-config-message-type", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken")
          }
        });
        this.KpiOnl = res.data.data.message_type;
        this.KpiOff = res.data.data.offline_message_type;

      } catch (err) {
        console.log(err);
      }
    },

  }
  ,
  mounted() {
    this.changeDateGet(this.startDay, this.endDay);
    setInterval(this.getListStaff(), 300000);
  }
}
</script>

<style scoped>
@import "EmployeeManagement.css";
</style>