<template>
  <NavBar/>
  <SettingFilter
      v-show="openSettingFilter"
      @closeFilter="closeSettingFilter"
      @changeMethod="changeMethod"
  />
  <div class="main">
    <div class="staffdetail-part">
      <div class="staffdetail-top">
        <div class="top-back">
          <button @click="$router.go(-1)">
            <img
                src="https://moshop.com.vn/_nuxt/img/caret-left-green.977777e.svg"
            />
          </button>
        </div>
        <div class="top-infor">
          <div class="infor-avatar">
            <img v-bind:src="shopUserDetail?.avatar"/>
            <h3
                style="
                font-family: Roboto;
                font-size: 20px;
                font-weight: bold;
                color: #000;
                left: -20%;
              "
            >
              {{ shopUserDetail.fullname }} / {{ shopUserDetail.tel }}
            </h3>
          </div>

          <div class="infor-status">
            <div class="infor-status-tittle">Trạng thái</div>
            <div class="staff__status">
              <div class="dropdown relative flex justify-center" :class="employeeStatus">
                <button @click="openDropDown = !openDropDown">
                  {{ employeeStatusText }}
                  <font-awesome-icon
                      icon="fa-solid fa-angle-down"
                      class="ml-1"
                  />
                </button>
                <div class="dropdown__status absolute" v-show="openDropDown">
                  <div
                      class="dropdown__status__item"
                      @click="updateStaffStatus(1)"
                  >
                    <div class="dropdown__status__item--active">
                      <img
                          src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
                          alt="statusCheck"
                          v-if="shopUserDetail.active === 1"
                      />
                    </div>
                    <div class="text">Đang làm việc</div>
                  </div>
                  <div
                      class="dropdown__status__item"
                      @click="updateStaffStatus(0)"
                  >
                    <div class="dropdown__status__item--active">
                      <img
                          src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
                          alt="statusCheck"
                          v-if="shopUserDetail.active === 0"
                      />
                    </div>
                    <div class="text">Nghỉ tạm thời</div>
                  </div>
                  <div
                      class="dropdown__status__item"
                      style="margin-bottom: 0px"
                      @click="updateStaffStatus(2)"
                  >
                    <div class="dropdown__status__item--active">
                      <img
                          src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
                          alt="statusCheck"
                          v-if="shopUserDetail.active === 2"
                      />
                    </div>
                    <div class="text">Đã nghỉ việc</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="top-action">
          <router-link
              :to="{ path: '/edit/' + shopUserDetail.id }"
              class="btn-editstaff flex items-center justify-center"
          >Sửa
          </router-link
          >
        </div>
      </div>
      <!--StaffDetail-top-end-->
      <div class="staffdetail-middle">
        <div class="middle-main">
          <div>
            <fieldset>
              <legend>Kết quả công việc</legend>
              <div class="middle-fillterBox">
                <div class="filter">
                  <button
                      class="filter-btn"
                      :class="renderType === 'today' ? 'active' : ''"
                      @click="changeRenderDate('today')"
                  >
                    Hôm nay
                  </button>
                  <button
                      class="filter-btn"
                      :class="renderType === 'thisWeek' ? 'active' : ''"
                      @click="changeRenderDate('thisWeek')"
                  >
                    Tuần này
                  </button>
                  <button
                      class="filter-btn"
                      :class="renderType === 'thisMonth' ? 'active' : ''"
                      @click="changeRenderDate('thisMonth')"
                  >
                    Tháng này
                  </button>
                  <button
                      class="filter-btn"
                      @click="changeRenderDate('custom')"
                      :class="renderType === 'custom' ? 'active' : ''"
                  >
                    Tùy chọn
                  </button>
                </div>
              </div>
              <div class="middle-table">
                <table class="table">
                  <thead class="table-header">
                  <tr>
                    <td>KH tương tác</td>
                    <td>KH có SĐT</td>
                    <td>KH đã gọi</td>
                    <td>ĐH đã chốt</td>
                    <td>Tỉ lệ chốt</td>
                    <td>ĐH thành công</td>
                    <td>ĐH hoàn</td>
                    <td>Doanh thu</td>
                    <td>Phí hoàn</td>
                    <td>TG phản hồi TB</td>
                  </tr>
                  </thead>
                  <tbody class="table-body">
                  <tr>
                    <td>{{ work_results.time_reply }}</td>
                    <td>{{ work_results.customer_has_phone }}</td>
                    <td>{{ work_results.call_log }}</td>
                    <td>{{ work_results.customer_deal }}</td>
                    <td>{{ work_results.rate_order }}</td>
                    <td>{{ work_results.order_success }}</td>
                    <td>{{ work_results.order_return }}</td>
                    <td>{{ work_results.revenue }}</td>
                    <td>{{ work_results.fee }}</td>
                    <td>{{ work_results.time_reply }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>
          </div>
        </div>
        <div></div>
      </div>
      <!--staffdetail-middle-end-->
      <div class="staffdetail-bottom">
        <div class="bottom-main">
          <div class="bottom-left">
            <div class="bottom-left-content">
              <fieldset>
                <legend>Thông tin công việc</legend>
                <div class="information-head">
                  <div class="formInline">
                    <label class="formInline-label"
                    >Ngày bắt đầu làm việc</label
                    >
                    <div class="formInline-inputBox">
                      {{ shopUserDetail.work_first_date }}
                    </div>
                  </div>
                  <div class="formInline">
                    <label class="formInline-label">Nơi làm việc</label>
                    <div class="formInline-inputBox">
                      {{
                        work_address.find((e) => {
                          return e.id == shopUserDetail.work_address;
                        })?.address
                      }}
                    </div>
                  </div>
                </div>
                <div class="working-time">
                  <div class="working-time-title">Thời gian làm việc</div>
                  <div class="working-time-item">
                    <div
                        class="workingTimeItem relative mb-[20px] items-center"
                        v-for="(time, index) in shopUserDetail.work_time_repeats"
                        :key="index"
                    >
                      <div class="workingTimeItem__index mr-[5px]">
                        <!-- {{ index + 1 }}. -->
                      </div>
                      <div class="flex">
                        <div class="workingTimeItem__input relative">
                          Từ
                          <input
                              class="w-[175px] border border-[#ced4da] rounded-[4px]"
                              type="text"
                              disabled="disable"
                              :value="time.start_time"
                          />
                          <font-awesome-icon
                              icon="fa-regular fa-clock"
                              class="absolute top-4 right-2 opacity-50"
                          />
                        </div>
                        <div class="workingTimeItem__input relative">
                          Đến
                          <input
                              class="w-[175px] border border-[#ced4da] rounded-[4px]"
                              type="text"
                              disabled="disable"
                              :value="time.end_time"
                          />
                          <font-awesome-icon
                              icon="fa-regular fa-clock"
                              class="absolute top-4 right-2 opacity-50"
                          />
                        </div>
                      </div>

                      <div class="workingTimeDay flex">
                        <div v-for="d in dateofweek">
                          <div
                              class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] cursor-pointer text-white"
                              :class="{ isactive: time.repeats.includes(d) }"
                          >
                            {{ showDay(d) }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="page">
                  <div class="page-title">Màn hình được sử dụng</div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input
                          class="page-checkbox"
                          type="checkbox"
                          disabled
                          :checked="
                          shopUserDetail?.screens?.includes('sale')
                            ? true
                            : false
                        "
                      />
                      <!-- @click="showPage = !showPage" -->
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span">Chats chốt đơn</span>
                    </label>
                    <div
                        class="pageBox"
                        v-show="showPage"
                        v-for="item of list_pages"
                    >
                      <label class="checkbox-container items-center">
                        <input
                            class="page-checkbox"
                            type="checkbox"
                            disabled="disabled"
                            :checked="item.noti_mode ? true : false"
                        />
                        <span class="custom-checkmark"></span>
                        <img
                            class="rounded-full mr-2"
                            v-bind:src="item.avatar"
                        />
                        <span class="screen_name">{{ item.name }}</span>
                      </label>
                    </div>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input
                          class="page-checkbox"
                          type="checkbox"
                          disabled="disabled"
                          :checked="
                          shopUserDetail?.screens?.includes('chat_ops')
                            ? true
                            : false
                        "
                      />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span">Chats vận hành</span>
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input
                          class="page-checkbox"
                          type="checkbox"
                          disabled="disabled"
                          :checked="
                          shopUserDetail?.screens?.includes('statistic')
                            ? true
                            : false
                        "
                      />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span"
                      >Tổng quan(Tổng quan shop)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input
                          class="page-checkbox"
                          type="checkbox"
                          disabled="disabled"
                          :checked="
                          shopUserDetail?.screens?.includes('order')
                            ? true
                            : false
                        "
                      />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span"
                      >Đơn hàng(Quản lý và đăng đơn GHTK)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input
                          class="page-checkbox"
                          type="checkbox"
                          disabled="disabled"
                          :checked="
                          shopUserDetail?.screens?.includes('customer')
                            ? true
                            : false
                        "
                      />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span"
                      >Khách hàng(Quản lý và chăm sóc KH)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input
                          class="page-checkbox"
                          type="checkbox"
                          disabled="disabled"
                          :checked="
                          shopUserDetail?.screens?.includes('product')
                            ? true
                            : false
                        "
                      />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span"
                      >Kho sản phẩm(Quản lý sản phẩm và xuất nhập)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input
                          class="page-checkbox"
                          type="checkbox"
                          disabled="disabled"
                          :checked="
                          shopUserDetail?.screens?.includes('staff')
                            ? true
                            : false
                        "
                      />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span"
                      >Nhân viên(Quản lý nhân viên )</span
                      >
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="bottom-right">
            <div class="bottom-right-content">
              <fieldset>
                <legend>Lịch sử hoạt động</legend>
                <div class="bottom-fillterBox">
                  <div class="filter" style="left: 4%; padding-top: 4%">
                    <button
                        class="filter-btn"
                        :class="renderType2 === 'today' ? 'active' : ''"
                        @click="changeRenderDate2('today')"
                    >
                      Hôm nay
                    </button>
                    <button
                        class="filter-btn"
                        :class="renderType2 === 'thisWeek' ? 'active' : ''"
                        @click="changeRenderDate2('thisWeek')"
                    >
                      Tuần này
                    </button>
                    <button
                        class="filter-btn"
                        :class="renderType2 === 'thisMonth' ? 'active' : ''"
                        @click="changeRenderDate2('thisMonth')"
                    >
                      Tháng này
                    </button>
                    <button
                        class="filter-btn"
                        @click="changeRenderDate2('custom')"
                        :class="renderType2 === 'custom' ? 'active' : ''"
                    >
                      Tùy chọn
                    </button>
                  </div>
                </div>
                <div class="logList">
                  <div
                      class="logList-perDay"
                      v-for="date in arrayDate[0]"
                      :key="date"
                  >
                    <p class="date font-bold text-black text-base">
                      {{ countDate(date) }} - {{ showDate(date) }}
                    </p>
                    <div
                        class="activity"
                        v-for="(act, id) in history_action"
                        :key="id"
                    >
                      <div
                          class="activity-time-cont px-2 flex justify-between items-center w-4/5"
                          v-if="act.time.slice(0, 10) == date"
                      >
                        <div class="activity-time">
                          {{ act.time }}
                        </div>
                        <div class="activity-content">
                          {{ act.description }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar.vue";
import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  formatDistanceToNow,
  format,
} from "date-fns";
import viLocale from "date-fns/locale/vi";
import SettingFilter from "../../components/SettingFilter/SettingFilter.vue";
import {mapActions} from "pinia";
import {useStaffStore} from "../../stores/StaffStore";

export default {
  name: "Employee",
  components: {NavBar, SettingFilter},
  data() {
    return {
      openDropDown: false,
      shopUserDetail: {},
      work_address: [],
      work_results: {},
      history_action: [],
      arrayAllDate: [],
      arrayDate: [],
      showPage: true,
      list_pages: [],
      dateofweek: [0, 1, 2, 3, 4, 5, 6],
      renderType: "today",
      renderType2: "today",
      startDay: format(startOfDay(new Date()), "yyyy-MM-dd"),
      endDay: format(endOfDay(new Date()), "yyyy-MM-dd"),
      openSettingFilter: false,
    };
  },
  computed: {
    employeeStatus() {
      if (this.shopUserDetail.active === 1) {
        return 'active';
      } else if (this.shopUserDetail.active === 0) {
        return 'temporaryBreak';
      } else if (this.shopUserDetail.active === 2) {
        return 'retired';
      }
    },
    employeeStatusText() {
      if (this.shopUserDetail.active === 1) {
        return "Đang làm việc";
      } else if (this.shopUserDetail.active === 0) {
        return "Nghỉ tạm thời";
      } else if (this.shopUserDetail.active === 2) {
        return "Đã nghỉ việc";
      }
    },
  },
  methods: {
    ...mapActions(useStaffStore, ["changeDateGet"]),

    showDay(day) {
      switch (day) {
        case 0:
          return " Thứ 2";
        case 1:
          return " Thứ 3";
        case 2:
          return " Thứ 4";
        case 3:
          return " Thứ 5";
        case 4:
          return " Thứ 6";
        case 5:
          return " Thứ 7";
        case 6:
          return " Chủ nhật";
        default:
          return "err";
      }
    },
    changeEmployeeStatus(status) {
      this.openDropDown = !this.openDropDown;
      this.employeeStatus = status;
    },
    countDate(day) {
      return formatDistanceToNow(new Date(day), {
        locale: viLocale,
        addSuffix: true,
      });
    },
    showDate(day) {
      return format(new Date(day), "PPPP", {locale: viLocale});
    },
    //xu ly fillterdate
    changeRenderDate2(method) {
      if (method === "today") {
        this.renderType2 = method;
        this.startDay = format(startOfDay(new Date()), "yyyy-MM-dd");
        this.endDay = format(endOfDay(new Date()), "yyyy-MM-dd");
        this.changeDateGet(this.startDay, this.endDay);
      }
      if (method === "thisWeek") {
        this.renderType2 = method;
        this.startDay = format(startOfWeek(new Date()), "yyyy-MM-dd");
        this.endDay = format(endOfWeek(new Date()), "yyyy-MM-dd");
        this.changeDateGet(this.startDay, this.endDay);
      }
      if (method === "thisMonth") {
        this.renderType2 = method;
        this.startDay = format(startOfMonth(new Date()), "yyyy-MM-dd");
        this.endDay = format(endOfMonth(new Date()), "yyyy-MM-dd");
        this.changeDateGet(this.startDay, this.endDay);
      }
      if (method === "custom") {
        this.openSettingFilter = !this.openSettingFilter;
      }
    },

    changeRenderDate(method) {
      if (method === "today") {
        this.renderType = method;
        this.startDay = format(startOfDay(new Date()), "yyyy-MM-dd");
        this.endDay = format(endOfDay(new Date()), "yyyy-MM-dd");
        this.changeDateGet(this.startDay, this.endDay);
      }
      if (method === "thisWeek") {
        this.renderType = method;
        this.startDay = format(startOfWeek(new Date()), "yyyy-MM-dd");
        this.endDay = format(endOfWeek(new Date()), "yyyy-MM-dd");
        this.changeDateGet(this.startDay, this.endDay);
      }
      if (method === "thisMonth") {
        this.renderType = method;
        this.startDay = format(startOfMonth(new Date()), "yyyy-MM-dd");
        this.endDay = format(endOfMonth(new Date()), "yyyy-MM-dd");
        this.changeDateGet(this.startDay, this.endDay);
      }
      if (method === "custom") {
        this.openSettingFilter = !this.openSettingFilter;
      }
    },
    changeMethod() {
      this.renderType = "custom";
      this.renderType2 = "custom";
    },
    closeModal() {
      this.openKpiModal = false;
    },
    closeSettingFilter() {
      this.openSettingFilter = false;
    },

    // call api Thay doi trang thai nv
    async updateStaffStatus(a) {
      try {
        const res = await axios.post(
            "https://x.ghtk.vn/api/v2/staff/set-status",
            {
              shop_user_id: this.$route.params.id,
              status: a,
            },
            {
              headers: {
                authorization: "Bearer " + localStorage.getItem("accessToken"),
              },
            }
        );
        this.$toast.show("Thay đổi trạng thái nhân viên thành công", {
          type: "success",
        });
        this.openDropDown = false;
        this.shopUserDetail.active = a;
      } catch (e) {
        this.$toast.show("Có lỗi xảy ra", {
          type: "error",
        });
      }
    },
  },

  mounted() {
    // call api chi tiet thong tin nhan vien
    axios
        .get(
            "https://x.ghtk.vn/api/v2/staff/detail?shop_user_id=" + this.$route.params.id,
            {
              headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
              },
            }
        )
        .then((res) => {
          this.shopUserDetail = res.data.data;
        })
        .catch((err) => {
          this.$toast.show("Có lỗi xảy ra", {
            type: "error",
          })
        });

    // call api dia chi lam viec
    axios
        .get("https://x.ghtk.vn/api/fulfilment/v1/shops/get-pick-addresses", {
          headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
          },
        })
        .then((res) => {
          this.work_address = res.data.data;
        })
        .catch((err) => {
          this.$toast.show("Có lỗi xảy ra", {
            type: "error",
          })
        });

    // call api ket qua lam viec
    axios
        .get(
            "https://x.ghtk.vn/api/v2/staff/get-work-result?start_date=2021-07-20&end_date=2021-07-20&shop_user_id=43aaa969-a97b-46a7-8e96-abd80560bcfe",
            {
              headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
              },
            }
        )
        .then((res) => {
          this.work_results = res.data.data;

        })
        .catch((err) => {
           this.$toast.show("Có lỗi xảy ra", {
              type: "error",
            })
          });
    // call api lich su hoat dong
    axios
        .get(
            "https://x.ghtk.vn/api/v2/staff/get-history-action?page=1&limit=30&shop_user_id=43aaa969-a97b-46a7-8e96-abd80560bcfe",
            {
              headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
              },
            }
        )
        .then((res) => {

          this.history_action = res.data.data;

          this.history_action.map((state) => {
            this.arrayAllDate.push(state.time.slice(0, 10));
          });
          this.arrayDate.push(Array.from(new Set(this.arrayAllDate)));
        })
        .catch((err) => {
     this.$toast.error("Có lỗi xảy ra")
        });

    // call api ds page
    axios
        .get("https://wh.ghtk.vn/api/v3/page/get-all-page-by-shop-code", {
          headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
          },
        })
        .then((res) => {
          this.list_pages = res.data.data.pages;
        })
        .catch((err) => {
          this.$toast.show("Có lỗi xảy ra", {
            type: "error",
          })
        });
  },
};
</script>

<style scoped>
@import "EmployeeDetail.css";
</style>
