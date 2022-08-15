<template>
  <div class="profile mb-[20px] ml-[15px]">
    <fieldset
      class="relative pt-[30px] border border-[#ccc] rounded-[10px] py-[18px] px-[30px] pb-[20px] shadow-md">
      <legend
        class="bg-white py-[6px] px-[20px] border border-[#ccc] text-[16px] font-bold">
        Hồ sơ nhân viên
      </legend>
      <div class="profile__list">
        <div class="idCard">
          <div class="idCard__title font-bold mb-[5px]">Chứng minh thư</div>
          <div class="idCard__image flex justify-start mb-[35px] ml-3">
            <label class="w-[80px] h-[80px] border border-dashed border-[#aaa] rounded-xl text-center flex flex-col justify-center text-[#069255] hover:text-[#fff] hover:bg-[#069255] cursor-pointer" for="">
              <button @click.prevent="handleClickInputImage">
                <font-awesome-icon icon="fa-solid fa-plus"/>
                <button>Thêm ảnh</button>
              </button>
            </label>
            <input
              ref="fileInputImage"
              class="hidden cursor-pointer"
              type="file"/>
          </div>
        </div>
        <div class="curriculum">
          <div class="curriculum__title font-bold mb-[5px]">Sơ yếu lý lịch</div>
          <div class="curriculum__image flex justify-start mb-[35px] ml-3">
            <label
              class="w-[80px] h-[80px] border border-dashed border-[#aaa] rounded-xl text-center flex flex-col justify-center text-[#069255] hover:text-[#fff] hover:bg-[#069255] cursor-pointer"
              for=""
            >
              <button @click.prevent="handleClickInputImage">
                <font-awesome-icon icon="fa-solid fa-plus" />
                <button>Thêm ảnh</button>
              </button>
            </label>
            <input
              ref="fileInputImage"
              class="hidden cursor-pointer"
              type="file"
            />
          </div>
        </div>
        <div class="profile">
          <div class="profile__title font-bold mb-[5px]">Sơ yếu lý lịch</div>
          <div class="profile__image flex justify-start mb-[35px] ml-3">
            <label class="w-[80px] h-[80px] border border-dashed border-[#aaa] rounded-xl text-center flex flex-col justify-center text-[#069255] hover:text-[#fff] hover:bg-[#069255] cursor-pointer" for="">
              <button @click.prevent="handleClickInputImage">
                <font-awesome-icon icon="fa-solid fa-plus" />
                <div>Thêm ảnh</div>
              </button>
            </label>
            <input ref="fileInputImage" class="hidden cursor-pointer" type="file"/>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
export default {
    methods: {
        handleClickInputImage(e) {
            this.$refs.fileInputImage.click();
        }
    }
};
</script>
<style>

</style>
