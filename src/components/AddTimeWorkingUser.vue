<template>
  <div v-show="isShow" class="workingTime__box mb-[15px]">
    <div class="workingTimeItem relative mb-[20px] flex items-center">
      <div class="workingTimeItem__index mr-[5px]">{{ index + 1 }}.</div>
      <div class="workingTimeItem__fromTitle mr-[20px]">Từ</div>
      <div class="workingTimeItem__input relative">
        <input
          v-model="userInfo.start_time"
          class="w-[175px] border border-[#ced4da] rounded-[4px]"
          type="time"
          placeholder="Chọn thời gian"
        />
        <font-awesome-icon
          icon="fa-solid fa-clock"
          class="absolute top-3 right-2 opacity-50"
        />
      </div>
      <div class="workingTimeItem__toTitle mx-[20px]">đến</div>
      <div class="workingTimeItem__input relative">
        <input
          v-model="userInfo.end_time"
          class="w-[175px] border border-[#ced4da] rounded-[4px]"
          type="time"
          placeholder="Chọn thời gian"
        />
        <font-awesome-icon
          icon="fa-solid fa-clock"
          class="absolute top-3 right-2 opacity-50"
        />
      </div>
      <div
        @click="deleteTimeWorking(index)"
        class="workingTimeItem__remove absolute right-0 text-[#eb5757] cursor-pointer"
      >
        Xóa
      </div>
    </div>
    <div class="workingTimeDay flex">
      <div @click="checkRepeatDate(0)" :class="this.listRepeatDate.includes(0)?' is-ActiveRepeat ': '' "
        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px]  cursor-pointer"
      >
        Thứ 2
      </div>
      <div @click="checkRepeatDate(1)" :class="this.listRepeatDate.includes(1)?' is-ActiveRepeat ': '' "
        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
      >
        Thứ 3
      </div>
      <div @click="checkRepeatDate(2)" :class="this.listRepeatDate.includes(2)?' is-ActiveRepeat ': '' "
        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
      >
        Thứ 4
      </div>
      <div @click="checkRepeatDate(3)" :class="this.listRepeatDate.includes(3)?' is-ActiveRepeat ': '' "
        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
      >
        Thứ 5
      </div>
      <div @click="checkRepeatDate(4)" :class="this.listRepeatDate.includes(4)?' is-ActiveRepeat ': '' "
        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
      >
        Thứ 6
      </div>
      <div @click="checkRepeatDate(5)" :class="this.listRepeatDate.includes(5)?' is-ActiveRepeat ': '' "
        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
      >
        Thứ 7
      </div>
      <div @click="checkRepeatDate(6)" :class="this.listRepeatDate.includes(6)?' is-ActiveRepeat ': '' "
        class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer"
      >
        Chủ nhật
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["sendId", "isShow", "index", "isGetData"],
  data() {
    return {
      // test:"",
      userInfo: {
        start_time: "",
        end_time: "",
      },
      listRepeatDate: []
    };
  },
  methods: {
    deleteTimeWorking(index) {
      console.log('xoa lan 1')
      this.$emit("delete", index);
    },
    checkRepeatDate(value){
      console.log("hello");
      if (this.listRepeatDate.includes(value)) {
        let b = this.listRepeatDate.filter(e => e === value);
        b.forEach(f => this.listRepeatDate.splice(this.listRepeatDate.findIndex(e => e === f),1));
      } else {
        this.listRepeatDate.push(value)
      }
      console.log(this.listRepeatDate)
    }
  },
  watch: {
    isGetData() {
      const data = {
        start_time: this.userInfo.start_time,
        end_time: this.userInfo.end_time,
        listRepeatDate: this.listRepeatDate
      }
      // console.log(this.isGetData);
      this.$emit("getDataAddTimeWorking", data);
      
    },
  },
};
</script>
<style scoped>
.is-ActiveRepeat{
  background-color: #069255;
  color: white;
}
</style>