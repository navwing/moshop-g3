<script>
// import { RouterLink, RouterView } from 'vue-router'
// import { LockClosedIcon } from '@heroicons/vue/solid' -- tail

import axios from "axios";
import router from "../../router";

export default {
  data() {
    return {
      isShow: true,

      password: 'Reset0103',
      username: 'hncp7@gmail.com'
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

    async login() {
      try {
        const response = await axios.post('https://x.ghtk.vn/api/fulfilment/auth/login', {
          username: this.username,
          password: this.password
        });
        if (response.status === 200) {
          localStorage.setItem('accessToken', response.data.data.access_token);
          localStorage.setItem('userInfo', JSON.stringify( response.data.data));
          this.$router.push('/home');
        }
      } catch (error) {
        this.$router.push('/login');
        console.log(error);
      }
    }
  },
};
</script>

<template>
  <div
      class="container h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="img" src="../../assets/images/moshop.png"/>
      </div>
      <div class="bg-white">
        <h1 class="txtLogin mt-6 text-center text-2xl text-gray-900">
          Đăng nhập
        </h1>

        <div
            class="mt-8 space-y-6 border-radius: 0.25rem"
        >
          <input type="hidden" name="remember" value="true"/>
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="rounded-md">
              <label for="email-address">Số điện thoại hoặc email</label>
              <input
                  id="email-address"
                  name="email"
                  type="text"
                  autocomplete="email"
                  required=""
                  class="appearance-none border-none rounded-none relative block w-full px-3 py-2 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nhập tên cửa hàng"
                  v-model="username"
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
                  class="appearance-none rounded-none border-none relative block w-full px-3 py-2 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  class="appearance-none rounded-none border-none relative block w-full px-3 py-2 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                @click="login"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-4/5"
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

                <a href="" style="color: #02a45e"
                >Đăng ký ngay!</a

                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "Login.css";
</style>
