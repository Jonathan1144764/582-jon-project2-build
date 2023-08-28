<template>
  <button @click="submitNewPark">Submit</button>
</template>

<script>
export default {
  name: "SubmitParkButton",
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
    submitNewPark() {
      let name = document.querySelector("#park-name-input").value;
      let status = document.querySelector('input[name="status"]:checked').value;
      let soccer = Number(document.querySelector("#soccer").value);
      let baseball = Number(document.querySelector("#baseball").value);
      let bathrooms = Number(document.querySelector("#bathrooms").value);
      let playgrounds = Number(document.querySelector("#playground").value);

      let newPark = {
        parkName: name,
        parkStatus: status,
        soccerFields: soccer,
        baseballDiamonds: baseball,
        parkBathrooms: bathrooms,
        parkPlaygrounds: playgrounds,
      };
      console.log(newPark, this.allParks);
    },
  },
};
</script>
