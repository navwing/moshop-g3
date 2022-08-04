<template>
  <div class="container">
    <div class="row page__header">
      <div class="left-content">
        <div class="info flex items-center">
          <h2 class="info-title">Quản lý nhân viên</h2>
          <div class="live">
            <div class="signal flex items-center justify-center">
              <div class="dot-signal"></div>
            </div>

          </div>
        </div>
      </div>
      <div class="right-content"></div>
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
.signal{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffc107;
}
.dot-signal {
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  border: 1px green solid;
  padding: 10px;
}
</style>