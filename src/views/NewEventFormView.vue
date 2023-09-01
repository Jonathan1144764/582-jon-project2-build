<template>
  <EventForm
    :allEvents="allEvents"
    :allParks="allParks"
    @refetchEvents="fetchEvents"
  />
</template>

<script>
import EventForm from "../components/EventForm.vue";

export default {
  name: "NewEventFormView",
  data() {
    return {
      allParks: [],
      allEvents: [],
    };
  },
  components: {
    EventForm,
  },
  methods: {
    fetchParks() {
      this.allParks = [];
      fetch("https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin")
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
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/newevent"
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
