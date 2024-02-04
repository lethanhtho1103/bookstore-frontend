<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>

<template>
  <!-- <div>
    <AppHeader />
    <div class="container mt-3">
      <router-view />
    </div>
  </div> -->
  <div class="wrapper">
    <SideBar />
    <div class="main">
      <div class="header">
        <div class="inner">
          <div class="welcome">Welcome Admin</div>
          <div class="actions">
            <div class="profile">
              <i class="user-avatar fa-solid fa-user"></i>
              <div class="name">Thanh Tho</div>
            </div>
          </div>
        </div>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<style>
.wrapper {
  position: relative;
  display: flex;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.main {
  position: relative;
  width: 80%;
  margin-left: 20%;
  padding-left: 24px;
  background-color: #f4f7ff;
}

.header {
  position: fixed;
  top: 0;
  margin-left: -24px;
  width: 80%;
  height: 80px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  background-color: #7da0fa;
  box-shadow: 0px 5px 21px -5px #cdd1e1;
  text-transform: capitalize;
  border-radius: 4px;
}

.inner {
  width: 100%;
  display: flex;
  padding: 0 34px;
  justify-content: space-between;
  align-items: center;
}

.welcome {
  color: #fff;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 600;
}

.actions {
  display: flex;
  justify-content: center;
}

.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  .name {
    margin-left: 8px;
    color: #fff;
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: 700;
  }
}

.user-avatar {
  /* height: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 14px;
  cursor: pointer; */
  color: #fff;
}

.content {
  width: 100%;
  margin-top: 80px;
  padding: 24px 12px 0;
  height: 2000px;
}
</style>
