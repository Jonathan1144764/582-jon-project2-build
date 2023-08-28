<template>
  <form>
    <ParkNameInput />
    <ParkStatusInput />
  </form>
</template>

<script>
import ParkNameInput from "./ParkNameInput.vue";
import ParkStatusInput from "./ParkStatusInput.vue";

export default {
  name: "ParkFrom",
  components: {
    ParkNameInput,
    ParkStatusInput,
  },
};
</script>
