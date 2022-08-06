<template>
  <div class="container">
    <div class="row page__header flex">
      <div class="left-content">
        <div class="info flex items-center">
          <h2 class="info-title">Quản lý nhân viên</h2>
          <div class="live">
            <div class="signal flex items-center justify-center relative">
              <div class="dot-signal"></div>
              <div class="circle-signal circle-1 absolute"></div>
              <div class="circle-signal circle-2 absolute"></div>
            </div>

          </div>
          <div class="pl-4" style="font-style: italic;">
            Live (cập nhật 14:00)
          </div>
        </div>
        <div class="filter">
          <button class="filter-btn active">Hôm nay</button>
          <button class="filter-btn ">Tuần này</button>
          <button class="filter-btn ">Tháng này</button>
          <button class="filter-btn ">Tùy chọn</button>
        </div>
      </div>
      <div class="right-content">
        <div class="action flex items-end flex-wrap  flex-col">
          <button class="btn-utility">
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
              <div class="head-title">KH tương tác</div>
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
              <div class="head-title"> KH có SĐT</div>
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
              <div class="head-title">KH đã gọi</div>
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
              <div class="head-title">ĐH đã chốt</div>
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
              <div class="head-title">Tỷ lệ chốt</div>
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
              <div class="head-title">ĐH thành công</div>
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
              <div class="head-title">ĐH hoàn</div>
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
              <div class="head-title">Doanh thu</div>
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
              <div class="head-title">Phí hoàn</div>
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
              <div class="head-title">TG phản hồi TB</div>
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
        <tr v-for="i in 5">
          <Employee/>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import Employee from "../../components/Employee/Employee.vue";

export default {
  name: "EmployeeManagement",
  components: {
    Employee
  },
  data() {
    return {};
  },
}
</script>

<style scoped>
@import "EmployeeManagement.css";
</style>