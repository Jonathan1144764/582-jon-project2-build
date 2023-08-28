<template>
  <form>
    <ParkNameInput />
  </form>
</template>

<script>
import ParkNameInput from "./ParkNameInput.vue";

export default {
  name: "ParkFrom",
  components: {
    ParkNameInput,
  },
};
</script>
