<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- Do this instead of router guard -->
    <router-link :class="{ disabled: !userStore.isAuthenticated }" to="/about"
      >About</router-link
    >
  </nav>
</template>

<script>
import { useUserStore } from "../store/userStore";

export default {
  name: "HeaderNav",
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },
};
</script>

<style scoped lang="scss">
.disabled {
  display: none;
}
</style>
