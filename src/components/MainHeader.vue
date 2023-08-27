<template>
  <header>
    <div class="container">
      <div class="header-flex">
        <h1>Parks & Rec</h1>
        <UserList />
        <HeaderNav />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
import UserList from "./UserList.vue";

export default {
  name: "MainHeader",
  components: {
    HeaderNav,
    UserList,
  },
};
</script>

<style scoped lang="scss"></style>
