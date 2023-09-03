<template>
  <h2>See what's up at your local parks</h2>
  <ParkList :allParks="allParks" :allEvents="allEvents" />
</template>

<script>
import ParkList from "@/components/ParkList.vue";

export default {
  name: "PublicView",
  data() {
    return {
      allEvents: [],
      allParks: [],
    };
  },
  components: {
    ParkList,
  },
  methods: {
    fetchParks() {
      this.allParks = [];
      fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public"
      )
        .then((response) => response.json())
        .then((json) => {
          for (let park of json) {
            this.allParks.push(park);
          }
        });
    },
    fetchEvents() {
      this.allEvents = [];
      fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public/event"
      )
        .then((response) => response.json())
        .then((json) => {
          for (let event of json) {
            this.allEvents.push(event);
          }
        });
    },
  },
  created() {
    this.fetchParks();
    this.fetchEvents();
  },
};
</script>
