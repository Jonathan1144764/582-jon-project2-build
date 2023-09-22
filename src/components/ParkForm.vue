<template>
  <form class="park-form">
    <h2 v-if="this.$route.fullPath.substring(6) == '/newpark'">
      Add a new park
    </h2>
    <h2 v-else>Update or delete a park</h2>
    <div class="name-image-inputs-wrapper">
      <ParkNameInput />
      <ParkImageInput />
    </div>

    <div class="park-radio-inputs">
      <ParkStatusInput />
    </div>
    <div class="park-number-inputs">
      <ParkFacilitiesInput />
    </div>
  </form>
  <SubmitParkButton
    @refetchParks="refetchParks"
    :allParks="allParks"
    :selectedPark="selectedPark"
  />
</template>

<script>
import ParkNameInput from "./ParkNameInput.vue";
import ParkImageInput from "./ParkImageInput.vue";
import ParkStatusInput from "./ParkStatusInput.vue";
import ParkFacilitiesInput from "./ParkFacilitiesInput.vue";
import SubmitParkButton from "./SubmitParkButton.vue";

export default {
  name: "ParkFrom",
  emits: ["refetchParks"],
  props: {
    allParks: {
      type: Array,
      default() {
        return [
          {
            id: 0,
            parkName: "default",
            parkImage: "http://www.example.com",
            parkStatus: "no status",
            soccerFields: 0,
            baseballDiamonds: 0,
            parkChalets: 0,
            parkPlaygrounds: 0,
          },
        ];
      },
    },
    selectedPark: {
      type: Object,
      default() {
        return {
          id: 0,
          parkName: "default",
          parkImage: "http://www.example.com",
          parkStatus: "no status",
          soccerFields: 0,
          baseballDiamonds: 0,
          parkChalets: 0,
          parkPlaygrounds: 0,
        };
      },
    },
  },
  components: {
    ParkNameInput,
    ParkImageInput,
    ParkStatusInput,
    ParkFacilitiesInput,
    SubmitParkButton,
  },
  methods: {
    refetchParks(id) {
      this.$emit("refetchParks", id);
    },
  },
};
</script>
