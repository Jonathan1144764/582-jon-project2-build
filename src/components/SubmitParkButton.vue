<template>
  <button
    v-if="this.$route.href.substring(6) == '/newpark'"
    @click="submitNewPark"
  >
    Submit
  </button>
  <button v-if="this.$route.href.substring(6) == '/updatepark'">Update</button>
  <button v-if="this.$route.href.substring(6) == '/updatepark'">Delete</button>
</template>

<script>
export default {
  name: "SubmitParkButton",
  emits: ["refetchParks"],
  props: {
    allParks: {
      type: Array,
      default() {
        return [
          {
            id: 0,
            parkName: "default",
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
  methods: {
    async submitNewPark() {
      let newId = this.allParks[this.allParks.length - 1].id + 1;
      let name = document.querySelector("#park-name-input").value;
      let status = document.querySelector('input[name="status"]:checked').value;
      let soccer = Number(document.querySelector("#soccer").value);
      let baseball = Number(document.querySelector("#baseball").value);
      let bathrooms = Number(document.querySelector("#bathrooms").value);
      let playgrounds = Number(document.querySelector("#playground").value);

      let newPark = {
        id: newId,
        parkName: name,
        parkStatus: status,
        soccerFields: soccer,
        baseballDiamonds: baseball,
        parkBathrooms: bathrooms,
        parkPlaygrounds: playgrounds,
      };
      try {
        await fetch(
          "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPark),
          }
        );
      } catch (error) {
        console.log(error);
      }
      this.$emit("refetchParks", newId);
      this.clear();
    },
    clear() {
      document.querySelector("#park-name-input").value = "";
      document.querySelector('input[name="status"]:checked').checked = false;
      document.querySelector("#soccer").value = 0;
      document.querySelector("#baseball").value = 0;
      document.querySelector("#bathrooms").value = 0;
      document.querySelector("#playground").value = 0;
    },
  },
};
</script>
