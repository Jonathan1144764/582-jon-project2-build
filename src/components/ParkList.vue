<template>
  <div class="park-list-grid">
    <ParkItem v-for="park in allParks" :park="park" :key="park.id" />
  </div>
</template>

<script>
import ParkItem from "./ParkItem.vue";

export default {
  name: "ParkList",
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
            parkBathrooms: 0,
            parkPlaygrounds: 0,
          },
        ];
      },
    },
  },
  components: {
    ParkItem,
  },
};
</script>
