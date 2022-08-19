<template>
  <form class="mb-[20px]">
    <fieldset
      class="relative border border-[#ccc] rounded-[10px] py-[18px] px-[30px] pb-[20px] shadow-md"
    >
      <legend
        class="bg-white py-[6px] px-[20px] border border-[#ccc] text-[16px] font-bold"
      >
        Thông tin
      </legend>
      <div class="grid grid-cols-[2fr_5fr_5fr] mx-[-15px]">
        <div class="flex justify-center">
          <div
            class="avatar relative w-[148px] h-[148px] rounded-full overflow-hidden flex"
          >
            <img :src=userInfo.avatar alt="avatar" />
            <div
              class="avatar__chooseImage absolute top-[108px] bg-[#f2f3f4] opacity-60 w-[148px] h-[40px]"
            >
              <button
                @click.prevent="handleClickInputAvatar"
                class="avatar__camera absolute left-[58px] bottom-[6px]"
              >
                <img
                  class="cursor-pointer"
                  src="https://moshop.com.vn/_nuxt/img/camera.7c2ff9c.svg"
                  alt="camera"
                />
              </button>
            </div>
            <input ref="fileInputAvatar" class="hidden" type="file" @change="changeAvatar" />
          </div>
        </div>
        <div class="px-[15px]">
          <div class="mb-[20px]">
            <div class="flex items-center">
              <label class="w-[180px] font-bold" for="">
                Tên nhân viên <span class="text-red-500">*</span>
              </label>
              <input
                v-model="userInfo.name"
                :class="{
                  'is-invalid': errors.name,
                  'is-success': success.name,
                }"
                @blur="validateAddNewUser()"
                class="w-full border border-[#ced4da] color-[#495057] py-1 px-2 rounded"
                type="text"
              />
            </div>
            <div
              v-if="errors.name"
              class="feedback-invalid ml-[130px] text-sm text-red-500"
            >
              {{ errors.name }}
            </div>
          </div>
          <div class="mb-[20px]">
            <div class="flex items-center">
              <label class="w-[180px] font-bold" for="">
                SĐT <span class="text-red-500">*</span>
              </label>
              <input
                v-model="userInfo.phone"
                :class="{
                  'is-invalid': errors.phone,
                  'is-success': success.phone,
                }"
                @blur="validateAddNewUser()"
                class="w-full border border-[#ced4da] color-[#495057] py-1 px-2 rounded"
                type="tel"
              />
            </div>
            <div
              v-if="errors.phone"
              class="feedback-invalid ml-[130px] text-sm text-red-500"
            >
              {{ errors.phone }}
            </div>
          </div>
          <div class="mb-[20px]">
            <div class="flex items-center">
              <label class="w-[180px] font-bold" for="" placeholder="Chọn ngày">
                Ngày sinh
              </label>
              <input
                v-model="userInfo.birthday"
                @blur="validateAddNewUser()"
                class="w-full border border-[#ced4da] color-[#495057] py-1 px-2 rounded"
                type="date"
              />
            </div>
          </div>
        </div>
        <div class="px-[15px]">
          <div class="mb-[20px]">
            <div class="relative flex items-center">
              <label class="w-[160px] font-bold" for="">
                Mật khẩu <span class="text-red-500">*</span>
              </label>
              <input
                v-model="userInfo.password"
                :class="{
                  'is-invalid': errors.password,
                  'is-success': success.password,
                }"
                @blur="validateAddNewUser()"
                class="w-full border border-[#ced4da] color-[#495057] py-1 px-2 rounded"
                type="password"
                placeholder="Mật khẩu phải có ít nhất 6 ký tự"
              />
              <font-awesome-icon
                icon="fa-solid fa-eye"
                class="absolute right-[10px] opacity-30"
              />
            </div>
            <div
              v-if="errors.password"
              class="feedback-invalid ml-[130px] text-sm text-red-500"
            >
              {{ errors.password }}
            </div>
          </div>
          <div class="flex items-center mb-[20px]">
            <label class="w-[160px] font-bold" for="" placeholder="Chọn ngày">
              Địa chỉ
            </label>
            <input 
              v-model="userInfo.live_address"
              @blur="validateAddNewUser()"
              class="w-full border border-[#ced4da] color-[#495057] py-1 px-2 rounded"
              type="text"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </form>
</template>
<script>
// import {userEmployeeStore} from "../../stores/EmployeeStore";
// import {mapActions, mapState} from "pinia";
export default {
  props: ["isGetData","editData"],
  data() {
    return {
      isError: false,
      isErrorName: false,
      isErrorPhone: false,
      isErrorPassword: false,
      userInfo: {
        avatar: "https://moshop.com.vn/default-avatar.jpg",
        name: "",
        phone: "",
        password: "",
        birthday: "",
        live_address: ""
      },
      errors: {
        name: "",
        phone: "",
        password: "",
      },
      success: {
        name: "",
        phone: "",
        password: "",
      },
    };
  },
  mounted() {
    setTimeout(this.bindData,1000)
  },
  methods: {
    bindData(){
      this.userInfo.avatar=this.editData.avatar;
      this.userInfo.name=this.editData.fullname;
      this.userInfo.phone=this.editData.tel;
      this.userInfo.password=this.editData.password;
      this.userInfo.birthday=this.editData.birthday;
      this.userInfo.live_address=this.editData.live_address;

    },
    handleClickInputAvatar(e) {
      this.$refs.fileInputAvatar.click();
    },
    changeAvatar(e) {
    this.userInfo.avatar = URL.createObjectURL(e.target.files[0]);
    },
    validateAddNewUser() {
      if (!this.userInfo.name) {
        this.errors.name = "Tên là bắt buộc";
        this.success.name = "";
      } else if (this.isNumber(this.userInfo.name)) {
        this.errors.name = "Tên phải là chữ";
        this.success.name = "";
      } else if (!this.userInfo.name.includes(" ")) {
        this.errors.name = "Tên không hợp lệ";
        this.success.name = "";
      } else {
        this.success.name = "Ký tự hợp lệ";
        this.errors.name = "";
        this.isErrorName = true;
      }
      if (!this.userInfo.phone) {
        this.errors.phone = "Số điện thoại là bắt buộc";
        this.success.phone = "";
      } else if (!this.isNumber(this.userInfo.phone)) {
        this.errors.phone = "Điện thoại phải là số";
        this.success.phone = "";
      } else if (this.userInfo.phone.length !== 10) {
        this.errors.phone = "Số điện thoại không hợp lệ";
        this.success.phone = "";
      } else if (this.userInfo.phone[0] !== "0") {
        this.errors.phone = "Đầu số không xác định";
        this.success.phone = "";
      } else {
        this.success.phone = "Ký tự hợp lệ";
        this.errors.phone = "";
        this.isErrorPhone = true;
      }
      if (!this.userInfo.password) {
        this.errors.password = "Mật khẩu là bắt buộc";
        this.success.password = "";
      } else if (this.userInfo.password.length < 6) {
        this.errors.password = "Mật khẩu tối thiểu phải có 6 ký tự";
        this.success.password = "";
      } else {
        this.success.password = "Ký tự hợp lệ";
        this.errors.password = "";
        this.isErrorPassword = true;
      }
    },
    isNumber(value) {
      return /^\d+$/.test(value);
    },
  },
  watch: {
    isGetData() {
      const data = {
        ...this.userInfo,
        isErrorName: this.isErrorName,
        isErrorPhone: this.isErrorPhone,
        isErrorPassword: this.isErrorPassword,
      };
      this.$emit("getDataAddNew", data);
      // this.$emit('checkError', this.isErrorName,this.isErrorPhone,
      // this.isErrorPassword)
    },
  },
};
</script>
<style scoped>
.is-invalid {
  border: 2px solid red;
}
.is-success {
  border: 2px solid #00ff73;
}
</style>
