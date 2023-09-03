<template>
  <div class="park">
    <div
      class="park-image"
      :style="{ backgroundImage: 'url(' + park.parkImage + ')' }"
    ></div>
  </div>
  <h3>{{ park.parkName }}</h3>
  <p>{{ park.parkStatus }}</p>
  <ul>
    <li>Soccer fields: {{ park.soccerFields }}</li>
    <li>Baseball diamonds: {{ park.baseballDiamonds }}</li>
    <li>Chalets: {{ park.parkBathrooms }}</li>
    <li>Playgrounds: {{ park.parkPlaygrounds }}</li>
  </ul>
</template>

<script>
export default {
  name: "ParkItem",
  props: {
    park: {
      type: Object,
      default() {
        return {
          id: 0,
          parkName: "default",
          parkImage: "http://www.example.com",
          parkStatus: "no status",
          soccerFields: 0,
          baseballDiamonds: 0,
          parkBathrooms: 0,
          parkPlaygrounds: 0,
        };
      },
    },
  },
};
</script>
