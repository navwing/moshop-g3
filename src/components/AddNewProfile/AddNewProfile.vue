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
            <div v-for="img in listImageCMND">
              <img :src=img alt="CMND" class="w-[80px] h-[80px] mr-2">
            </div>
            <label
                class="w-[80px] h-[80px] border border-dashed border-[#aaa] rounded-xl text-center flex flex-col justify-center text-[#069255] hover:text-[#fff] hover:bg-[#069255] cursor-pointer"
                for="">
              <button @click.prevent="handleClickInputImage">
                <font-awesome-icon icon="fa-solid fa-plus"/>
                <button>Thêm ảnh</button>
              </button>
            </label>
            <input
                @change="addImage(1)"
                ref="fileInputImageCMND"
                class="hidden cursor-pointer"
                accept="image/*"
                type="file"/>
          </div>
        </div>
        <div class="curriculum">
          <div class="curriculum__title font-bold mb-[5px]">Sơ yếu lý lịch</div>
          <div class="curriculum__image flex justify-start mb-[35px] ml-3">
            <div v-for="img in listImageInfo">
              <img :src=img alt="Info" class="w-[80px] h-[80px] mr-2">
            </div>
            <label
                class="w-[80px] h-[80px] border border-dashed border-[#aaa] rounded-xl text-center flex flex-col justify-center text-[#069255] hover:text-[#fff] hover:bg-[#069255] cursor-pointer"
                for=""
            >
              <button @click.prevent="handleClickInputImageInfo">
                <font-awesome-icon icon="fa-solid fa-plus"/>
                <button>Thêm ảnh</button>
              </button>
            </label>
            <input
                @change="addImage(2)"
                ref="fileInputImageInfo"
                class="hidden cursor-pointer"
                type="file"
                accept="image/*"
            />
          </div>
        </div>
        <div class="profile">
          <div class="profile__title font-bold mb-[5px]">Hồ sơ</div>
          <div class="profile__image flex justify-start mb-[35px] ml-3">
            <div v-for="img in listImageProfile">
              <img :src=img alt="Profile" class="w-[80px] h-[80px] mr-2">
            </div>
            <label
                class="w-[80px] h-[80px] border border-dashed border-[#aaa] rounded-xl text-center flex flex-col justify-center text-[#069255] hover:text-[#fff] hover:bg-[#069255] cursor-pointer"
                for="">
              <button @click.prevent="handleClickInputImageProfile">
                <font-awesome-icon icon="fa-solid fa-plus"/>
                <div>Thêm ảnh</div>
              </button>
            </label>
            <input ref="fileInputImageProfile" class="hidden cursor-pointer" type="file" accept="image/*"
                   @change="addImage(3)"/>

          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listImageCMND: [],
      listImageInfo: [],
      listImageProfile: [],
    };
  },
  props: ["editData"],
  mounted() {
    setTimeout(this.bindData, 1000);
  },
  methods: {
    bindData() {
      this.editData.images.cmnd.forEach(image => {
        this.listImageCMND.push(image.image);
      });
      this.editData.images.syll.forEach(image => {
        this.listImageInfo.push(image.image);
      });
      this.editData.images.hdld.forEach(image => {
        this.listImageInfo.push(image.image);
      });
    },
    handleClickInputImage() {
      this.$refs.fileInputImageCMND.click();
    },
    handleClickInputImageInfo() {
      this.$refs.fileInputImageInfo.click();
    },
    handleClickInputImageProfile() {
      this.$refs.fileInputImageProfile.click();
    },
    addImage(type) {
      if (type === 1) {
        this.listImageCMND.push(URL.createObjectURL(this.$refs.fileInputImageCMND.files[0]));

      }
      if (type === 2) {
        this.listImageInfo.push(URL.createObjectURL(this.$refs.fileInputImageInfo.files[0]));

      }
      if (type === 3) {
        this.listImageProfile.push(URL.createObjectURL(this.$refs.fileInputImageProfile.files[0]));

      }
    },
  }
};
</script>
<style>

</style>
