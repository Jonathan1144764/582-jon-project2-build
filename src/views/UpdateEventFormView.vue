<template>
  <EventSelect :allEvents="allEvents" />
</template>

<script>
import EventSelect from "../components/EventSelect.vue";

export default {
  name: "UpdateEventFormView",
  data() {
    return {
      allEvents: [],
      selectedEvent: {},
    };
  },
  components: {
    EventSelect,
  },
  methods: {
    fetchEvents() {
      this.allEvents = [];
      fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/updateevent"
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
    this.fetchEvents();
  },
};
</script>
