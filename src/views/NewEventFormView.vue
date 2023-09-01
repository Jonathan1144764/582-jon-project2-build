<template>
  <EventForm :allParks="allParks" />
</template>

<script>
import EventForm from "../components/EventForm.vue";

export default {
  name: "NewEventFormView",
  data() {
    return {
      allParks: [],
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
  },
  created() {
    this.fetchParks();
  },
};
</script>
