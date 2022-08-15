<template>
  <div v-show="isShowSuccessAll" class="fixed bg-[#303030]/[0.5] w-full h-full top-0 left-0 flex items-center justify-center z-10">
    <div class="w-[500px] rounded-[4px]">
      <div class="relative bg-[#069255] text-[#fff] flex justify-center items-center font-bold py-3">
        Xác nhận đăng ký
        <button class="absolute right-3">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </div>
      <div class="bg-white text-black p-3">
        <p class="mb-4">
          Mã OTP vừa được gửi đến số điện thoại quý khách đã đăng ký!<br />
          Vui lòng nhập đúng mã OTP để hoàn thành.
        </p>
        <h6>Mã OTP</h6>
        <input
          class="rounded w-full mb-4"
          type="text"
          placeholder="Nhập mã OTP"/>
        <p class="mb-4">
          Lưu ý: Nếu bạn không nhận được sms báo mã OTP, vui lòng thử lại hoặc
          gửi gmail về <u>cskh@ghtk.vn</u> để được hỗ trợ nhanh nhất!
        </p>
        <button
          class="bg-[#303030]/[0.5] text-white font-bold w-full py-2 rounded"
          type="submit">
          Xác nhận
        </button>
      </div>
    </div>
  </div>
  <div v-show="isShowErrorAll" class="fixed w-full bottom-[55px] left-0 flex justify-center z-10">
    <div class="bg-red-500 text-white py-2 px-4 rounded-full">
      Thông tin bắt buộc không được để trống
    </div>
  </div>
</template>
<script>
export default {
    props: [
        'isShowSuccessAll',
        'isShowErrorAll'
    ]
};
</script>
<style>

</style>