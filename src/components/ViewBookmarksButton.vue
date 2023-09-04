<template>
  <button @click="bookmarksView" to="/:username">View your events</button>
</template>

<script>
import { useUserStore } from "../store/userStore";

export default {
  name: "ViewBookmarksButton",
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },
  methods: {
    bookmarksView() {
      this.$router.push({
        name: "username",
        params: { username: this.userStore.loggedUser },
      });
    },
  },
};
</script>
