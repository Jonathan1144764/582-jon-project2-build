<template>
  <button @click="closeWindow">X</button>
</template>

<script>
export default {
  name: "ExitWindow",
  methods: {
    closeWindow() {
      this.$emit("closeWindow", true);
    },
  },
};
</script>
