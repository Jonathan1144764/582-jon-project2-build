<template>
  <ParkSelect :allParks="allParks" />
  <ParkForm />
</template>

<script>
import ParkSelect from "../components/ParkSelect.vue";
import ParkForm from "../components/ParkForm.vue";

export default {
  name: "UpdateParkFormView",
  data() {
    return {
      allParks: [],
    };
  },
  components: {
    ParkSelect,
    ParkForm,
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
