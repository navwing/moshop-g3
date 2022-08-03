<template>
  <div class="navBar flex text-white ">
    <div class="navBar__logo">
      <a href="#" class="navBar__brand ">moshop</a>
    </div>
    <div class="h-full">
      <ul class="navaction flex flex-row items-center basis-auto h-full">
        <li>
          <div class="navbar__dropdown flex items-center">
            <div class="flex items-center navbar__dropdown__email px-2">emailtest@gmail.com</div>
            <div class="pl-2">
              <font-awesome-icon icon="fa-solid fa-angle-down"/>
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
        <li>
          <a href="#" class="navlink">
            <font-awesome-icon icon="fa-solid fa-users" class="text-2xl"/>
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
  name: "NavBar"
}
</script>

<style scoped>

.navBar {
  padding: 0 0 0 15px;
  background-color: #069255;
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
</style>