<template>
  <div class="navBar flex text-white bg-default_green mb-7 ">
    <div class="navBar__logo">
      <a href="#" class="navBar__brand ">moshop</a>
    </div>
    <div class="h-full">
      <ul class="navaction flex flex-row items-center basis-auto h-full">
        <li>
          <div class="dropdown-management relative" @click="isOpenDropDown=!isOpenDropDown">
            <div class="navbar__dropdown flex items-center">
              <div class="flex items-center navbar__dropdown__email px-2">{{userInfo.shop?.email}}</div>
              <div class="pl-2">
                <font-awesome-icon icon="fa-solid fa-angle-down"/>
              </div>
            </div>
            <div class="navbar__dropdown__content text-black text-left" v-show="isOpenDropDown">
              <div class="account-list">
                <div class="account-item flex items-center justify-between">
                  <div class="item-info flex items-center">
                    <div class="avatar">
                      <img src="https://moshop.com.vn/_nuxt/img/avatar_ghtk.06fe700.png" alt="ava">
                    </div>
                    <div class="account-name mx-2">
                      <strong>{{userInfo.shop?.g_order}}-{{userInfo.user?.fullname}}</strong>
                      <p>{{userInfo.shop?.email}}</p>
                    </div>
                  </div>
                  <div class="item-check text-default_green">
                    <font-awesome-icon icon="fa-solid fa-check" />
                  </div>
                </div>
                <div class="account-item flex items-center justify-between">
                  <div class="item-info flex items-center">
                    <div class="avatar">
                      <img src="https://moshop.com.vn/_nuxt/img/avatar_ghtk.06fe700.png" alt="ava">
                    </div>
                    <div class="account-name mx-2">
                      <strong>GHTK</strong>
                      <p >testemail@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="add-account flex items-center">
                  <font-awesome-icon icon="fa-solid fa-user-plus"  class="mr-2 text-xl"/>
                  <span>Th??m t??i kho???n</span>
                </div>
                <div class="manage-account flex items-center">
                  <font-awesome-icon icon="fa-solid fa-user" class="mr-4 text-xl"/>
                  <span>Qu???n l?? t??i kho???n</span>
                </div>
              </div>
              <hr class="my-1" style="color: #bdbdbd">
              <div class="dropdown-item">
                <a href="#" class="w-100 h-100 flex items-center whitespace-nowrap">
                  <font-awesome-icon icon="fa-solid fa-box" class="mr-2 text-xl" />
                  Qu???n l?? kho v?? s???n ph???m
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" class="w-100 h-100 flex items-center whitespace-nowrap">
                  <font-awesome-icon icon="fa-solid fa-circle-info" class="mr-2 text-xl" />
                Th??ng tin c???a h??ng
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" class="w-100 h-100 flex items-center whitespace-nowrap">
                  <font-awesome-icon icon="fa-solid fa-tag" class="mr-2 text-xl" />
                 Qu???n l?? tag
                </a>
              </div>
              <div class="dropdown-item" @click="logOut">
                <a href="#" class="w-100 h-100 flex items-center whitespace-nowrap">
                  <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" class="mr-2 text-xl"/>
                  ????ng xu???t
                </a>
              </div>

            </div>
          </div>
        </li>
        <li style="margin-left: 32px" v-tooltip="'B??o c??o'">
          <a href="#" class="navlink" >
            <font-awesome-icon icon="fa-solid fa-chart-simple" class="text-2xl"/>
            <span class="hidden lg:block">B??o C??o</span>
          </a>
        </li>
        <li>
          <a href="#" class="navlink" v-tooltip="'Qu???n l?? kh??ch h??ng'">
            <font-awesome-icon icon="fa-solid fa-user-group" class="text-2xl"/>
            <span class="hidden lg:block">Kh??ch H??ng</span>
          </a>
        </li>
        <li>
          <a href="#" class="navlink"  v-tooltip="'Chats'">
            <font-awesome-icon icon="fa-solid fa-comment" class="text-2xl"/>
            <span class="hidden lg:block">Chats</span>
          </a>
        </li>
        <li>
          <a href="#" class="navlink"  v-tooltip="'Lives'">
            <font-awesome-icon icon="fa-solid fa-video" class="text-2xl"/>
            <span class="hidden lg:block">Lives</span>
          </a>
        </li>
        <li class="bg-white text-default_green"  v-tooltip="'Nh??n vi??n'">
          <a href="#" class="navlink">
            <font-awesome-icon icon="fa-solid fa-users" class="text-2xl "/>
            <span class="hidden lg:block">Nh??n Vi??n</span>
          </a>
        </li>
        <li>
          <a href="#" class="navlink"  v-tooltip="'????n h??ng'">
            <font-awesome-icon icon="fa-solid fa-clipboard-list" class="text-2xl"/>
            <span class="hidden lg:block">????n H??ng</span>
          </a>
        </li>
        <li style="background-color: #da4838"  v-tooltip="'????ng ????n'">
          <a href="#" class=" createPackage">
            <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" class="text-2xl"/>
            <span class="hidden lg:block">????ng ????n</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "NavBar",
  data () {
    return {
      isOpenDropDown: false,
      userInfo:'',
    }
  },
  methods:{
    logOut() {
      localStorage.removeItem("accessToken")
      this.$router.go("/login")
    }
  },
  mounted(){
    this.userInfo= JSON.parse(localStorage.getItem("userInfo"))

  }
}
</script>

<style scoped>
@import "NavBar.css";
</style>