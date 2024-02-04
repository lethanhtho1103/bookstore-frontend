<script>
// import { faBook } from "@fortawesome/free-solid-svg-icons";
</script>
<template>
  <div class="wrapper">
    <div class="logo-link">
      <img
        src="https://thumbs.dreamstime.com/b/book-store-logo-template-lettering-composition-93137507.jpg"
        alt="logo"
      />
      <div class="name-store">Book store</div>
    </div>
    <div class="menu">
      <router-link
        to="/"
        class="menu-item"
        :class="{ active: $route.path === '/' }"
      >
        <span class="icon"><i class="fas fa-shop"></i></span>
        <span class="title">Quản lý kho sách</span>
      </router-link>
      <router-link
        to="/rent"
        class="menu-item"
        :class="{ active: $route.path === '/rent' }"
      >
        <span class="icon"><i class="fas fa-book"></i></span>
        <span class="title">Quản lý mượn sách</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 20%;
  display: block;
  flex-direction: column;
}
.logo-link {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 12px 24px;
  margin-bottom: 24px;
  text-decoration: none;
  box-shadow: 0px 5px 21px -5px #cdd1e1;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
img {
  width: 60px;
  height: 60px;
}
.name-store {
  margin-left: 8px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #4b49ac;
}

.menu {
  display: block;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin: 0 12px 5px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  color: #6c7383;
  transition: background-color ease-in-out 200ms;
  text-transform: capitalize;

  &:hover {
    color: #fff;
    background-color: #4b49ac;
  }

  &.active {
    color: #fff;
    background-color: #4b49ac;
  }
}

.title {
  margin-left: 10px;
}

.icon,
.active-icon {
  display: flex;
}

.active-icon {
  display: none;
}
</style>
