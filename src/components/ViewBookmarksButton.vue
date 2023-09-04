<template>
  <button @click="bookmarksView">View your events</button>
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
      this.$emit("bookmarksView", this.userStore.loggedUser);
    },
  },
};
</script>
