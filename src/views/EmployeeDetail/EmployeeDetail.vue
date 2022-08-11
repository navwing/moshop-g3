<template>
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
            <img
              src="https://cache.giaohangtietkiem.vn/image/show/201d61e0-4025-4202-a9e4-79f669f19908/ccfa8277-505c-444b-affd-57b9ce5112f9.jpg"
            />
            <h3
              style="
                font-family: Roboto;
                font-size: 20px;
                font-weight: bold;
                color: #000;
                left: -20%;
              "
            >
              Puuu / 8456009294
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
                      <td>ĐH thành công</td>
                      <td>ĐH hoàn</td>
                      <td>Doanh thu</td>
                      <td>Phí hoàn</td>
                      <td>TG phản hồi TB</td>
                    </tr>
                  </thead>
                  <tbody class="table-body">
                    <tr>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0%</td>
                      <td>0</td>
                      <td>0đ</td>
                      <td>0đ</td>
                      <td>0s</td>
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
                    <div class="formInline-inputBox">2021-08-01</div>
                  </div>
                  <div class="formInline">
                    <label class="formInline-label">Nơi làm việc</label>
                    <div class="formInline-inputBox">
                      đường Phúc Diễn, Quận Từ Liêm, Hà Nội
                    </div>
                  </div>
                </div>
                <div class="working-time">
                  <div class="working-time-title">Thời gian làm việc</div>
                  
                </div>
                <div class="page">
                  <div class="page-title">Màn hình được sử dụng</div>
                  <div class="screenBox">
                    <label class="customcheckbox">
                      <input type="checkbox"  disabled="disabled" />
                      <span class="customcheckbox-checkmark"></span>
                      <span class="customcheckbox-span">Chats chốt đơn</span>
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="customcheckbox">
                      <input type="checkbox" />
                      <span class="customcheckbox-span">Chats vận hành</span>
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="customcheckbox">
                      <input type="checkbox"  />
                      <span class="customcheckbox-span"
                        >Tổng quan(Tổng quan shop)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="customcheckbox">
                      <input type="checkbox" />
                      <span class="customcheckbox-span"
                        >Đơn hàng(Quản lý và đăng đơn GHTK)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="customcheckbox">
                      <input type="checkbox"  />
                      <span class="customcheckbox-span"
                        >Khách hàng(Quản lý và chăm sóc KH)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="customcheckbox">
                      <input type="checkbox"  />
                      <span class="customcheckbox-span"
                        >Kho sản phẩm(Quản lý sản phẩm và xuất nhập)</span
                      >
                    </label>
                  </div>
                  <div class="screenBox">
                    <label class="customcheckbox">
                      <input type="checkbox"/>
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
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  
export default {
  name: "Employee",
  props: ['id'],
  data() {
    return {
      openDropDown: false,
      employeeStatus: "active",
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
  },
  
};
</script>

<style scoped>
@import "EmployeeDetail.css";
</style>
