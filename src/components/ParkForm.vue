<template>
  <form>
    <ParkNameInput />
    <div class="park-radio-inputs">
      <ParkStatusInput />
    </div>
    <div class="park-number-inputs">
      <ParkFacilitiesInput />
    </div>
  </form>
</template>

<script>
import ParkNameInput from "./ParkNameInput.vue";
import ParkStatusInput from "./ParkStatusInput.vue";
import ParkFacilitiesInput from "./ParkFacilitiesInput.vue";

export default {
  name: "ParkFrom",
  components: {
    ParkNameInput,
    ParkStatusInput,
    ParkFacilitiesInput,
  },
};
</script>
