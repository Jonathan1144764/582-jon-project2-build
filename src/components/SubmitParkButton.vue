<template>
  <button
    v-if="this.$route.fullPath.substring(6) == '/newpark'"
    @click="submitNewPark"
  >
    Submit
  </button>
  <button
    v-if="this.$route.fullPath.substring(6) == '/updatepark'"
    @click="updatePark"
  >
    Update
  </button>
  <button
    v-if="this.$route.fullPath.substring(6) == '/updatepark'"
    @click="deletePark"
  >
    Delete
  </button>
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
            parkImage: "http://www.example.com",
            parkStatus: "no status",
            soccerFields: 0,
            baseballDiamonds: 0,
            parkChalets: 0,
            parkPlaygrounds: 0,
          },
        ];
      },
    },
    selectedPark: {
      type: Object,
      default() {
        return {
          id: 0,
          parkName: "default",
          parkImage: "http://www.example.com",
          parkStatus: "no status",
          soccerFields: 0,
          baseballDiamonds: 0,
          parkChalets: 0,
          parkPlaygrounds: 0,
        };
      },
    },
  },
  methods: {
    async submitNewPark() {
      let newId = this.allParks[this.allParks.length - 1].id + 1;
      let name = document.querySelector("#park-name-input").value;
      let image = document.querySelector("#park-image-input").value;
      let status = document.querySelector('input[name="status"]:checked').value;
      let soccer = Number(document.querySelector("#soccer").value);
      let baseball = Number(document.querySelector("#baseball").value);
      let chalets = Number(document.querySelector("#chalet").value);
      let playgrounds = Number(document.querySelector("#playground").value);

      let newPark = {
        id: newId,
        parkName: name,
        parkImage: image,
        parkStatus: status,
        soccerFields: soccer,
        baseballDiamonds: baseball,
        parkChalets: chalets,
        parkPlaygrounds: playgrounds,
      };
      try {
        await fetch(
          "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/newpark",
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
    async updatePark() {
      let name = document.querySelector("#park-name-input").value;
      let image = document.querySelector("#park-image-input").value;
      let status = document.querySelector('input[name="status"]:checked').value;
      let soccer = Number(document.querySelector("#soccer").value);
      let baseball = Number(document.querySelector("#baseball").value);
      let chalets = Number(document.querySelector("#chalet").value);
      let playgrounds = Number(document.querySelector("#playground").value);

      let updatedPark = {
        id: this.selectedPark.id,
        parkName: name,
        parkImage: image,
        parkStatus: status,
        soccerFields: soccer,
        baseballDiamonds: baseball,
        parkChalets: chalets,
        parkPlaygrounds: playgrounds,
      };
      try {
        await fetch(
          "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/updatepark",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPark),
          }
        );
      } catch (error) {
        console.log(error);
      }
      this.$emit("refetchParks", updatedPark.id);
      this.clear();
      this.clearParkSelect();
    },
    async deletePark() {
      let parkId = this.selectedPark.id;
      try {
        await fetch(
          "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/updatepark",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: parkId }),
          }
        );
      } catch (error) {
        console.log(error);
      }
      this.$emit("refetchParks", parkId);
      this.clear();
      this.clearParkSelect();
    },
    clear() {
      document.querySelector("#park-name-input").value = "";
      document.querySelector("#park-image-input").value = "";
      document.querySelector('input[name="status"]:checked').checked = false;
      document.querySelector("#soccer").value = 0;
      document.querySelector("#baseball").value = 0;
      document.querySelector("#chalet").value = 0;
      document.querySelector("#playground").value = 0;
    },
    clearParkSelect() {
      document.querySelector("#parks").value = "";
    },
  },
};
</script>
