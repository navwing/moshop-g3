<template>
  <div v-show="isShow" class="workingTime__box mb-[15px] " >
    <div class="workingTimeItem relative mb-[20px] flex items-center">
      <div class="workingTimeItem__index mr-[5px]">{{index + 1}}.</div>
      <div class="workingTimeItem__fromTitle mr-[20px]">Từ</div>
      <div class="workingTimeItem__input relative">
        <input class="w-[175px] border border-[#ced4da] rounded-[4px]" type="text" placeholder="Chọn thời gian" v-model="sendId.start_time"/>
        <font-awesome-icon icon="fa-solid fa-clock" class="absolute top-3 right-2 opacity-50"/>
      </div>
      <div class="workingTimeItem__toTitle mx-[20px]">đến</div>
      <div class="workingTimeItem__input relative">
        <input class="w-[175px] border border-[#ced4da] rounded-[4px]" type="text" placeholder="Chọn thời gian"/>
        <font-awesome-icon icon="fa-solid fa-clock" class="absolute top-3 right-2 opacity-50"/>
      </div>
      <div @click="deleteTimeWorking(index)" class="workingTimeItem__remove absolute right-0 text-[#eb5757] cursor-pointer">
        Xóa
      </div>
    </div>
    <div class="workingTimeDay flex">
      <div class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer">
        Thứ 2
      </div>
      <div class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer">
        Thứ 3
      </div>
      <div class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer">
        Thứ 4
      </div>
      <div class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer">
        Thứ 5
      </div>
      <div class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer">
        Thứ 6
      </div>
      <div class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer">
        Thứ 7
      </div>
      <div class="workingTimeDay__item py-[2px] px-[8px] border border-[#069255] rounded-[20px] mr-[10px] mb-[5px] hover:bg-[#069255] hover:text-[#fff] cursor-pointer">
        Chủ nhật
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'sendId',
    'isShow',
    'index'
  ],
  data(){
    return {
      test:"",
    }
  },
  methods: {
    deleteTimeWorking(index){
      this.$emit('delete', index)
      console.log('index', index);
    }
  }
}
</script>
<style>

</style>