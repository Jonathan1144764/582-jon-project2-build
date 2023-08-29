<template>
  <ParkSelect :allParks="allParks" />
</template>

<script>
import ParkSelect from "../components/ParkSelect.vue";

export default {
  name: "UpdateParkFormView",
  data() {
    return {
      allParks: [],
    };
  },
  components: {
    ParkSelect,
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
