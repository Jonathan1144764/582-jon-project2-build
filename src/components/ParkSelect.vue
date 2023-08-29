<template>
  <label for="parks">Select Park: </label>
  <select name="parks" id="parks">
    <option value=""></option>
    <option v-for="park in this.allParks" :value="park.parkName" :key="park.id">
      {{ park.parkName }}
    </option>
  </select>
</template>

<script>
export default {
  name: "ParkSelect",
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
};
</script>
