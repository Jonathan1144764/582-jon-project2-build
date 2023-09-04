<template>
  <button @click="bookmarkEvent">Bookmark</button>
</template>

<script>
export default {
  name: "AddBookmark",
  methods: {
    bookmarkEvent() {
      this.$emit("bookmarkEvent", true);
    },
  },
};
</script>
