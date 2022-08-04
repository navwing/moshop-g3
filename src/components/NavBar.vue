<template>
  <div class="navBar flex text-white bg-default_green">
    <div class="navBar__logo">
      <a href="#" class="navBar__brand ">moshop</a>
    </div>
    <div class="h-full">
      <ul class="navaction flex flex-row items-center basis-auto h-full">
        <li>
          <div class="dropdown-management relative" @click="isOpenDropDown=!isOpenDropDown">
            <div class="navbar__dropdown flex items-center">
              <div class="flex items-center navbar__dropdown__email px-2">emailtest@gmail.com</div>
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
                      <strong>GHTK</strong>
                      <p>testemailasasdasdas@gmail.com</p>
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
                      <p >testemailasdasdasasdas@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="add-account flex items-center">
                  <font-awesome-icon icon="fa-solid fa-user-plus"  class="mr-2 text-xl"/>
                  <span>Thêm tài khoản</span>
                </div>
                <div class="manage-account flex items-center">
                  <font-awesome-icon icon="fa-solid fa-user" class="mr-4 text-xl"/>
                  <span>Quản lý tài khoản</span>
                </div>
              </div>
              <hr class="my-1" style="color: #bdbdbd">
              <div class="dropdown-item">
                <a href="#" class="w-100 h-100 flex items-center whitespace-nowrap">
                  <font-awesome-icon icon="fa-solid fa-box" class="mr-2 text-xl" />
                  Quản lý kho và sản phẩm
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" class="w-100 h-100 flex items-center whitespace-nowrap">
                  <font-awesome-icon icon="fa-solid fa-circle-info" class="mr-2 text-xl" />
                Thông tin cửa hàng
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" class="w-100 h-100 flex items-center whitespace-nowrap">
                  <font-awesome-icon icon="fa-solid fa-tag" class="mr-2 text-xl" />
                 Quản lý tag
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" class="w-100 h-100 flex items-center whitespace-nowrap">
                  <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" class="mr-2 text-xl"/>
                  Đăng xuất
                </a>
              </div>

            </div>
          </div>

        </li>
        <li style="margin-left: 32px">
          <a href="#" class="navlink">
            <font-awesome-icon icon="fa-solid fa-chart-simple" class="text-2xl"/>
            <span>Báo Cáo</span>
          </a>
        </li>
        <li>
          <a href="#" class="navlink">
            <font-awesome-icon icon="fa-solid fa-user-group" class="text-2xl"/>
            <span>Khách Hàng</span>
          </a>
        </li>
        <li>
          <a href="#" class="navlink">
            <font-awesome-icon icon="fa-solid fa-comment" class="text-2xl"/>
            <span>Chats</span>
          </a>
        </li>
        <li>
          <a href="#" class="navlink">
            <font-awesome-icon icon="fa-solid fa-video" class="text-2xl"/>
            <span>Lives</span>
          </a>
        </li>
        <li class="bg-white text-default_green">
          <a href="#" class="navlink">
            <font-awesome-icon icon="fa-solid fa-users" class="text-2xl "/>
            <span>Nhân Viên</span>
          </a>
        </li>
        <li>
          <a href="#" class="navlink">
            <font-awesome-icon icon="fa-solid fa-clipboard-list" class="text-2xl"/>
            <span>Đơn Hàng</span>
          </a>
        </li>
        <li style="background-color: #da4838">
          <a href="#" class="navlink">
            <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" class="text-2xl"/>
            <span>Đăng Đơn</span>
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
      isOpenDropDown: false
    }
  },
}
</script>

<style scoped>

.navBar {
  padding: 0 0 0 15px;
  height: 48px;
}

.navBar__brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  line-height: inherit;
  white-space: nowrap;
}

.navBar__logo a {
  height: 100%;
  align-items: center;
  font-size: 31px;
  font-weight: 700;
  margin-right: 12px;
}

ul li {
  cursor: pointer;
  text-align: center;
}

.navbar__dropdown {
  padding: 3px 4px;
  color: #fff;
  border-left: 3px solid #fff;
  height: 22px;
}

.navbar__dropdown__email {
  max-width: 186px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 17px;
}

.navlink {
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.navlink span {
  line-height: 1;
  margin-top: 4px;
  margin-left: 8px;
  font-weight: 700;

}

.navbar__dropdown__content{
  position: absolute;
  z-index: 1001;
  left: 15px;
  top: 28px;
  background: #fff;
  box-shadow: 0 4px 20px rgb(0 0 0 / 25%);
  border-radius: 5px;
  min-width: 100%;
}
.account-list{
  max-height: 203px;
  overflow: auto;

}

.account-item{
  padding: 5px 7px 5px 10px;
}
.avatar{
  width: 30px;
  height: 30px
}
.account-name p,strong{
  white-space: nowrap !important;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
.add-account{
  margin-top: 5px;
  padding: 7px 10px;
}
.manage-account{
  padding: 7px 10px;
}
.dropdown-item{
  padding: 5px 10px;
}
</style>