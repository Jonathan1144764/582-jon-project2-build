<template>
  <button @click="bookmarkEvent">Bookmark</button>
</template>

<script>
export default {
  name: "AddBookmark",
  methods: {
    bookmarkEvent() {
      console.log("booked");
      //   this.$emit("bookmarkEvent", true);
    },
  },
};
</script>
