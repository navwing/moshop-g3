<script>
// import { RouterLink, RouterView } from 'vue-router'
// import { LockClosedIcon } from '@heroicons/vue/solid' -- tail
export default {
  data() {
    return {
      isShow: true,
      password: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.isShow ? "Show" : " Hide";
    },
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<template>
  <div
    class="container h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-"
  >
    <div class="max-w-md w-full space-y-8">
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
              <label for="email-address">Số điện thoại hoặc email</label>
              <input
                id="email-address"
                name="email"
                type="text"
                autocomplete="email"
                required=""
                class="appearance-none rounded-none relative block w-full px-3 py-2 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nhập tên cửa hàng"
              />
            </div>
            <div class="rounded-md">
              <label for="password">Mật khẩu</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="appearance-none rounded-none relative block w-full px-3 py-2 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nhập mật khẩu"
                v-model="password"
                v-if="isShow"
              />
              <input
                id="password"
                name="password"
                type="text"
                ref="password-field"
                autocomplete="current-password"
                required=""
                class="appearance-none rounded-none relative block w-full px-3 py-2 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nhập mật khẩu"
                v-model="password"
                v-else
              />
              <span
                class="forgetpass text-green-600 hover:text-green-500 decoration-green-600"
              >
                Quên mật khẩu ?
              </span>
              <span class="eye-icon" @click="toggle">
                <svg
                  class="eye eye-close"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="isShow"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                  ></path>
                </svg>
                <svg
                  class="eye eye-open"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  v-else
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </span>
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
body {
  font-family: "Roboto", Helvetica, Arial, "DejaVu Sans", "Liberation Sans",
    Freesans, sans-serif !important;
}
.container {
  height: 100vh;
  background-color: #219653;
}
.max-w-md {
  height: 460px;
  width: 350px;
}
.img {
  transform: translateX(30%);
  width: 62%;
}
.txtLogin {
  font-size: 18px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: bold;
}
.bg-white {
  border-radius: 4%;
  width: 350px;
}
.rounded-md {
  position: relative;
}
.forgetpass {
  position: absolute;
  right: 12%;
  top: 70%;
  transform: translateY(-50%);
  text-decoration: underline;
  font-family: "Roboto";
  size: 14px;
  z-index: 25px;
}
.eye-icon {
  height: 40px;
  width: 40px;
  position: absolute;
  z-index: 50;
  right: 1%;
  top: 60%;
}
.eye {
  position: absolute;
  right: 15px;
  top: 10%;
  transform: translateY(-50%);
  cursor: pointer;
  max-width: 20px;
  width: 30px;
  height: 30px;
  z-index: 30;
}
.rounded-md label {
  color: #5c5c5c;
  font: 16px;
  font-family: "Roboto", Helvetica, Arial, "DejaVu Sans", "Liberation Sans",
    "Freesans", sans-serif !important;
  left: 4%;
  font-weight: 600;
}

.rounded-md input {
  border-bottom: 1px solid #e8e8e8;
}
input:focus {
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
