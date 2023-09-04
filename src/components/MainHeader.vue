<template>
  <header>
    <div class="container">
      <div class="header-flex">
        <h1>Parks & Rec</h1>
        <ManageUsers />
        <ViewBookmarksButton />
        <HeaderNav />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
import ManageUsers from "./ManageUsers.vue";
import ViewBookmarksButton from "./ViewBookmarksButton.vue";

export default {
  name: "MainHeader",
  components: {
    HeaderNav,
    ManageUsers,
    ViewBookmarksButton,
  },
};
</script>

<style scoped lang="scss"></style>
