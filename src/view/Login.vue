<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import { LockClosedIcon } from '@heroicons/vue/solid' -- tail
</script>

<template>
  <div
    class="container h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-"
  >
    <div class=" max-w-md w-full space-y-8">
      <div>
        <img class="img" src="../assets/images/moshop.png" />
      </div>
      <div class="bg-white">
        <h1 class="txtLogin mt-6 text-center text-2xl text-gray-900">
          Đăng nhập
        </h1>
        <form
          class="mt-8 space-y-6 border-radius: 0.25rem"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="rounded-md">
              <label for="email-address" 
                >Số điện thoại hoặc email</label
              >
              <input
                id="email-address"
                name="email"
                type="text"
                autocomplete="email"
                required=""
                class="appearance-none rounded-none relative block w-full px-3 py-2  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nhập tên cửa hàng"
              />
            </div>
            <div class="rounded-md">
              <label for="password" >Mật khẩu</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="appearance-none rounded-none relative block w-full px-3 py-2  text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nhập mật khẩu"
              />
              <!-- <div class="text-sm">
                <span
                  href="#"
                  class="text-green-600 hover:text-green-500 decoration-green-600"
                >
                  Quên mật khẩu ?
                </span>
                <span class="show-btn"
                  ><font-awesome-icon icon="fa-solid fa-eye"
                /></span>
              </div> -->
            </div>
          </div>

          <div class="btnLogin">
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-green-700 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-4/5"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Đăng nhập
            </button>
          </div>
          <div class="text-bottom flex items-center justify-between">
            <div class="flex items-center">
              <p>
                Bạn chưa có tài khoản?
                <a href="" class="text-green-600 hover:text-green-500"
                  >Đăng ký ngay!</a
                >
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
body{
    font-family: "Roboto",Helvetica,Arial,"DejaVu Sans","Liberation Sans",Freesans,sans-serif!important;
}
.container{
    height: 100vh;
    background-color: #219653;
}
.max-w-md{
    height: 460px;
    width: 350px;
}
.img{
    transform: translateX(30%);
    width: 62%;
}
.txtLogin {
  font-size: 18px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: bold;
}
.bg-white{
    border-radius: 4%;
    width: 350px;
}
.rounded-md label{
    color: #5c5c5c;
    font: 16px;
    font-family: "Roboto",Helvetica,Arial,"DejaVu Sans","Liberation Sans",Freesans,sans-serif!important;
    left: 4%;
    font-weight: 600;
}

.rounded-md input{
    border-bottom: 1px solid #e8e8e8;
}
input:focus{
    border-bottom: 1px solid #069255;
  
}
.text-sm {
  display: flex;
  justify-content: right;
  right: 5%;
}
.btnLogin {
  transform: translateX(10%);
}
.text-bottom {
  transform: translateX(11%);
  bottom: 10px;
}
</style>
