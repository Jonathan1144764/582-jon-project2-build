<template>
  <header>
    <div class="container">
      <div class="header-flex">
        <h1>Parks & Rec</h1>
        <HeaderNav />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";

export default {
  name: "MainHeader",
  components: {
    HeaderNav,
  },
};
</script>

<style scoped lang="scss"></style>
