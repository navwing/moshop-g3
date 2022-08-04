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
  </div>
</template>

<script>
export default {
  name: "EmployeeManagement",
}
</script>

<style scoped>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.left-content {
  width: 75%;
  padding-right: 15px;
  padding-left: 15px;
}

.right-content {
  width: 25%;
}

.info-title {
  font-size: 40px;
  font-weight: 700;
  margin-right: 26px;
  margin-bottom: 0.5rem;
}

.signal {
  width: 20px;
  height: 20px;
}

.dot-signal {
  width: 10px;
  height: 10px;
  background-color: #ff5550;
  border-radius: 50%;

}

.circle-signal {
  border: 2px #ff5550 solid;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.circle-1 {
  animation: signal-animation1 3s infinite;
}

.circle-2 {
  animation: signal-animation2 3s infinite;
}

@keyframes signal-animation1 {
  from {
    padding: 5px;
  }
  to {
    padding: 15px;
  }
}

@keyframes signal-animation2 {
  from {
    padding: 5px;
  }
  to {
    padding: 10px;
  }
}

.filter-btn {
  margin-right: 15px;
  padding: 4px 20px;
  margin-bottom: 10px;
  border-radius: 18px;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  color: #069255;
  background-color: #efefef
}

.filter .active {
  background-color: #069255;
  color: white;
}

.btn-utility {
  margin-bottom: 10px;
  font-weight: 500;
  border-radius: 18px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  width: 162px;
  background-color: #069255;
  color: white;
  font-size: 14px
}
.btn-utility span{
  margin-left: 10px;
}
</style>