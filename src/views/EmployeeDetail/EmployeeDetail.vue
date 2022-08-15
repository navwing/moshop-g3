<template>
  <NavBar/>
  <div class="main">
    <div class="staffdetail-part">
      <div class="staffdetail-top">
        <div class="top-back">
          <a href="#">
            <img
              src="https://moshop.com.vn/_nuxt/img/caret-left-green.977777e.svg"
            />
          </a>
        </div>
        <div class="top-infor">
          <div class="infor-avatar">
            <img v-bind:src="shopUserDetail?.avatar" />
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
              <div class="dropdown relative" :class="employeeStatus">
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
                    @click="changeEmployeeStatus('active')"
                  >
                    <div class="dropdown__status__item--active">
                      <img
                        src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
                        alt="statusCheck"
                        v-if="employeeStatus === 'active'"
                      />
                    </div>
                    <div class="text">Đang làm việc</div>
                  </div>
                  <div
                    class="dropdown__status__item"
                    @click="changeEmployeeStatus('temporaryBreak')"
                  >
                    <div class="dropdown__status__item--active">
                      <img
                        src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
                        alt="statusCheck"
                        v-if="employeeStatus === 'temporaryBreak'"
                      />
                    </div>
                    <div class="text">Nghỉ tạm thời</div>
                  </div>
                  <div
                    class="dropdown__status__item"
                    style="margin-bottom: 0px"
                    @click="changeEmployeeStatus('retired')"
                  >
                    <div class="dropdown__status__item--active">
                      <img
                        src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
                        alt="statusCheck"
                        v-if="employeeStatus === 'retired'"
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
          <button class="btn-editstaff">Sửa</button>
        </div>
      </div>
      <!--StaffDetail-top-end-->
      <div class="staffdetail-middle">
        <div class="middle-main">
          <form>
            <fieldset>
              <legend>Kết quả công việc</legend>
              <div class="middle-fillterBox">
                <div class="fillterBox">
                  <button>Hôm nay</button>
                  <button>Tuần này</button>
                  <button>Tháng này</button>
                  <button>Tùy chọn</button>
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
          </form>
          <div></div>
          <div></div>
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
                          log(e);
                        })?.address
                      }}
                    </div>
                  </div>
                </div>
                <div class="working-time">
                  <div class="working-time-title">Thời gian làm việc</div>
                  <div class="working-time-item">
                    <div
                      class="workingTimeItem relative mb-[20px] flex items-center"
                      v-for="(time, index) in shopUserDetail.work_time_repeats"
                      :key="index"
                    >
                      <div class="workingTimeItem__index mr-[5px]">
                        <!-- {{ index + 1 }}. -->
                      </div>
                      <div class="workingTimeItem__fromTitle mr-[20px]">Từ</div>
                      <div class="workingTimeItem__input relative">
                        <input
                          class="w-[175px] border border-[#ced4da] rounded-[4px]"
                          type="text"
                          disabled="disable"
                          :value="time.start_time"
                        />
                        <font-awesome-icon
                          icon="fa-regular fa-clock"
                          class="absolute top-3 right-2 opacity-50"
                        />
                      </div>
                      <div class="workingTimeItem__toTitle mx-[20px]">đến</div>
                      <div class="workingTimeItem__input relative">
                        <input
                          class="w-[175px] border border-[#ced4da] rounded-[4px]"
                          type="text"
                          disabled="disable"
                          :value="time.end_time"
                        />
                        <font-awesome-icon
                          icon="fa-regular fa-clock"
                          class="absolute top-3 right-2 opacity-50"
                        />
                      </div>
                    </div>
                    <div class="workingTimeDay flex">
                      <div
                        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
                      >
                        Thứ 2
                      </div>
                      <div
                        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
                      >
                        Thứ 3
                      </div>
                      <div
                        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
                      >
                        Thứ 4
                      </div>
                      <div
                        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
                      >
                        Thứ 5
                      </div>
                      <div
                        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
                      >
                        Thứ 6
                      </div>
                      <div
                        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
                      >
                        Thứ 7
                      </div>
                      <div
                        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
                      >
                        Chủ nhật
                      </div>
                    </div>
                  </div>
                </div>
                <div class="page">
                  <div class="page-title">Màn hình được sử dụng</div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input class="page-checkbox" type="checkbox" />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span">Chats chốt đơn</span>
                    </label>
                    <div class="pageBox">
                      <div class="pageBox-content">
                        <div class="pageBox-item">
                          <label type="checkbox-container items-center">
                            <input class="page-checkbox" type="checkbox" />
                            <span class="custom-checkmark"></span>
                            <img
                              src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/115988338_101546078327729_390394737921795991_n.jpg?stp=c0.0.160.160a_dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=kc2rj2UO2fMAX_iRSqU&_nc_oc=AQkFa9upi5X1f2AYOdjqZoy5CenDm6AUbaE027MKY_LZhWgAs1NtFoz5621owPB3BTA&_nc_ht=scontent-hkt1-2.xx&edm=AOf6bZoEAAAA&oh=00_AT_ORCSxsFWtBix0NwAMp87gcYv7MuvaNZ76F5PSjfy5oA&oe=632172AD"
                            />
                            <span>Test Moshop App</span>
                          </label>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input class="page-checkbox" type="checkbox" />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span">Chats vận hành</span>
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input class="page-checkbox" type="checkbox" />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span"
                        >Tổng quan(Tổng quan shop)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input class="page-checkbox" type="checkbox" />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span"
                        >Đơn hàng(Quản lý và đăng đơn GHTK)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input class="page-checkbox" type="checkbox" />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span"
                        >Khách hàng(Quản lý và chăm sóc KH)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input class="page-checkbox" type="checkbox" />
                      <span class="custom-checkmark"></span>
                      <span class="customcheckbox-span"
                        >Kho sản phẩm(Quản lý sản phẩm và xuất nhập)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="checkbox-container items-center">
                      <input class="page-checkbox" type="checkbox" />
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
                  <div class="fillterBox">
                    <button>Hôm nay</button>
                    <button>Tuần này</button>
                    <button>Tháng này</button>
                    <button>Tùy chọn</button>
                  </div>
                </div>
                <div class="logList">
                  <div class="logList-perDay">
                    <!-- <div class="logList-perDayTitle">
                      352 ngày trước - thứ Tư, ngày 25/08/2021
                    </div> -->
                    <div
                      class="activity"
                      v-for="(act, id) in history_action"
                      :key="id"
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
import NavBar from "../../components/NavBar.vue";

export default {
  name: "Employee",
  components: {NavBar},
  // props: ['id'],
  data() {
    return {
      openDropDown: false,
      employeeStatus: "active",
      shopUserDetail: {},
      work_address: [],
      work_results: {},
      history_action: [],
    };
  },
  computed: {
    employeeStatusText() {
      if (this.employeeStatus === "active") {
        return "Đang làm việc";
      } else if (this.employeeStatus === "temporaryBreak") {
        return "Nghỉ tạm thời";
      } else if (this.employeeStatus === "retired") {
        return "Đã nghỉ việc";
      }
    },
  },
  methods: {
    changeEmployeeStatus(status) {
      this.openDropDown = !this.openDropDown;
      this.employeeStatus = status;
    },
    log(message) {
      console.log(message);
    },
  },
  mounted() {
    // call api chi tiet thong tin nhan vien
    axios
      .get(
        "https://x.ghtk.vn/api/v2/staff/detail?shop_user_id=43aaa969-a97b-46a7-8e96-abd80560bcfe",
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.shopUserDetail = res.data.data;
        console.log(this.shopUserDetail);
      })
      .catch((err) => {
        console.log(err);
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
        console.log(this.work_address);
      })
      .catch((err) => {
        console.log(err);
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
        console.log(this.work_results);
      })
      .catch((err) => {
        console.log(err);
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
        // console.log(res);
        this.history_action = res.data.data;
        console.log(this.history_action);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
@import "EmployeeDetail.css";
</style>
