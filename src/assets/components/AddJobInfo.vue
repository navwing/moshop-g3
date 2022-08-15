<template>
  <div class="jobInfor mb-[20px] mr-[15px]">
    <fieldset
      class="relative pt-[36px] border border-[#ccc] rounded-[10px] py-[18px] px-[30px] pb-[20px] shadow-md"
    >
      <legend
        class="bg-white py-[6px] px-[20px] border border-[#ccc] text-[16px] font-bold"
      >
        Thông tin công việc
      </legend>
      <div class="jobInfor__head mb-[28px]">
        <div class="flex items-center mb-[20px]">
          <label class="w-[250px] font-bold" for=""
            >Ngày bắt đầu làm việc</label
          >
          <input
            class="w-full border border-[#ced4da] py-1 px-2 rounded"
            type="date"
            placeholder="Chọn ngày"
          />
        </div>
        <div class="flex mb-[20px]">
          <div class="w-[250px] pt-2" for="">
            <label class="font-bold">Nơi làm việc</label>
          </div>
          <div class="relative w-full">
            <input
              @click="showScroll"
              v-model="addressCurrent"
              class="w-full border border-[#ced4da] py-1 px-2 rounded"
              type="text"
              placeholder="Chọn nơi làm việc"
            />
            <font-awesome-icon
              icon="fa-solid fa-angle-down"
              class="absolute top-2 right-3 opacity-50 cursor-pointer"
            />
            <div
              @blur="blurAddress"
              v-if="isShowScroll"
              class="scrollAddress absolute left-0 w-full h-[300px] overflow-scroll shadow-lg z-10"
            >
              <ul>
                <li
                  v-for="(address, index) in workingAddress"
                  :key="index"
                  @click="selectAddress(address)"
                  class="p-2 bg-white hover:bg-[#41b883] hover:text-white cursor-pointer"
                >
                  {{ address }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="workingTime mb-[25px]">
        <div class="workingTime__title font-bold mb-[25px]">
          Thời gian làm việc
        </div>
        <div class="workingTime__action">
          <AddTimeWorkingUser
            v-for="(timeWorking, index) in listTimeWorking"
            :key="index"
            :isShow="isShow"
            :sendId="timeWorking"
            :index="index"
            @delete="deleteTimeWorking"
          />
          <button
            @click.prevent="addTimeWorking"
            class="py-[8px] px-[22px] border border-[#28a745] rounded-md text-[#28a745] hover:bg-[#28a745] hover:text-[#fff] cursor-pointer"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
            Thêm thời gian
          </button>
        </div>
      </div>
      <div class="screenUsed">
        <div class="screenUsed__title font-bold mb-[20px]">
          Màn hình được sử dụng
        </div>
        <div class="mb-[10px]">
          <label class="inline-flex items-center cursor-pointer" for="">
            <input
              @click="addChat"
              class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]"
              type="checkbox"
            />
            <span>Chat chốt đơn</span>
          </label>
          <ChatToCloseOrders :isShowChat="isShowChat" />
        </div>
        <div class="mb-[10px]">
          <label class="inline-flex items-center cursor-pointer" for="">
            <input
              class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]"
              type="checkbox"
            />
            <span>Chats vận hành</span>
          </label>
        </div>
        <div class="mb-[10px]">
          <label class="inline-flex items-center cursor-pointer" for="">
            <input
              class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]"
              type="checkbox"
            />
            <span>Tổng quan (Tổng quan shop)</span>
          </label>
        </div>
        <div class="mb-[10px]">
          <label class="inline-flex items-center cursor-pointer" for="">
            <input
              class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]"
              type="checkbox"
            />
            <span>Đơn hàng (Quản lý và đăng đơn GHTK)</span>
          </label>
        </div>
        <div class="mb-[10px]">
          <label class="inline-flex items-center cursor-pointer" for="">
            <input
              class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]"
              type="checkbox"
            />
            <span>Khách hàng (Quản lý và chăm sóc KH)</span>
          </label>
        </div>
        <div class="mb-[10px]">
          <label class="inline-flex items-center cursor-pointer" for="">
            <input
              class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]"
              type="checkbox"
            />
            <span>Kho và sản phẩm (Quản lý sản phẩm và xuất nhập)</span>
          </label>
        </div>
        <div class="mb-[10px]">
          <label class="inline-flex items-center cursor-pointer" for="">
            <input
              class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]"
              type="checkbox"
            />
            <span>Nhân viên (Quản lý nhân viên)</span>
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
import AddTimeWorkingUser from "./AddTimeWorkingUser.vue";
import ChatToCloseOrders from "./ChatToCloseOrders.vue";
export default {
  props: ["workingAddress"],
  components: {
    AddTimeWorkingUser,
    ChatToCloseOrders,
  },
  data() {
    return {
      listTimeWorking: [],
      isShow: false,
      isShowScroll: false,
      isShowChat: false,
      addressCurrent: "",
    };
  },
  methods: {
    addTimeWorking() {
      this.isShow = true;
      if (this.isShow) {
        this.listTimeWorking.push({
          id: this.listTimeWorking.length + 1,
          component: AddTimeWorkingUser,
        });
      }
    },
    deleteTimeWorking(index) {
      this.listTimeWorking.splice(index, 1);
    },
    showScroll() {
      this.isShowScroll = !this.isShowScroll;
    },
    selectAddress(address) {
      this.addressCurrent = address;
    },
    addChat() {
      this.isShowChat = !this.isShowChat;
    },
  },
};
</script>
<style scoped>
.scrollAddress::-webkit-scrollbar {
  width: 6px;
  background-color: white;
}
.scrollAddress::-webkit-scrollbar-thumb {
  width: 6px;
  height: 50px;
  background-color: #c3c3c3;
}
</style>
