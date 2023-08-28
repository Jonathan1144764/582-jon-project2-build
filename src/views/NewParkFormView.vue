<template>
  <ParkForm :allParks="allParks" />
</template>

<script>
import ParkForm from "../components/ParkForm.vue";

export default {
  name: "NewParkFormView",
  data() {
    return {
      allParks: [],
    };
  },
  components: {
    ParkForm,
  },
  methods: {
    fetchParks() {
      this.allParks = [];
      fetch("https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
    },
  },
  created() {
    this.fetchParks();
  },
};
</script>
