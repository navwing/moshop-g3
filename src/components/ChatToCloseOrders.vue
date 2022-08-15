<template>
    <div v-show="isShowChat" class="mt-[6px]">
        <div class="flex items-center ml-[35px] mb-[16px]">
            <input class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]" type="checkbox"/>
            <div class="w-[30px] h-[30px] bg-[#c3c3c3] rounded-full mr-[4px]"></div>4587
        </div>
        <div class="flex items-center ml-[35px] mb-[16px]">
            <input class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]" type="checkbox"/>
            <div class="w-[30px] h-[30px] bg-[#c3c3c3] rounded-full mr-[4px]"></div>Tạp chí BĐS Nha Trang
        </div>
        <div class="flex items-center ml-[35px] mb-[16px]">
            <input class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]" type="checkbox"/>
            <div class="w-[30px] h-[30px] bg-[#c3c3c3] rounded-full mr-[4px]"></div>Vẽ Vời
        </div>
        <div class="flex items-center ml-[35px] mb-[16px]">
            <input class="h-[24px] w-[24px] border-[#069255] rounded-[5px] checked:bg-green-700 mr-[10px]" type="checkbox"/>
            <div class="w-[30px] h-[30px] bg-[#c3c3c3] rounded-full mr-[4px]"></div>Page bán hàng
        </div>
        </div>
</template>
<script>
export default {
    props: [
        'isShowChat'
    ]
}
</script>
<style>

</style>