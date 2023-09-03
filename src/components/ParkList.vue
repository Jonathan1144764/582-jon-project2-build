<template>
  <div class="park-list-grid">
    <ParkItem
      v-for="park in allParks"
      :park="park"
      :key="park.id"
      :allEvents="allEvents"
    />
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
    allEvents: {
      type: Array,
      default() {
        return [
          {
            id: 0,
            eventName: "default",
            eventLocation: "somewhere",
            eventStartDate: 0,
            eventEndDate: 0,
            eventDescription: 0,
          },
        ];
      },
    },
  },
  components: {
    ParkItem,
  },
  // methods: {
  //   showEvents(href) {
  //     for (let i = 0; i < this.allEvents.length; i++) {
  //       if (this.allEvents[i].eventLocation == href) {
  //         console.log("yayy");
  //       } else {
  //         console.log("aww");
  //       }
  //     }
  //   },
  // },
};
</script>
