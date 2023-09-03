<template>
  <div class="park">
    <div
      class="park-image"
      :style="{ backgroundImage: 'url(' + park.parkImage + ')' }"
    ></div>
    <h3>{{ park.parkName }}</h3>
    <p>{{ park.parkStatus }}</p>
    <ul>
      <li>Soccer fields: {{ park.soccerFields }}</li>
      <li>Baseball diamonds: {{ park.baseballDiamonds }}</li>
      <li>Chalets: {{ park.parkBathrooms }}</li>
      <li>Playgrounds: {{ park.parkPlaygrounds }}</li>
    </ul>
    <button @click="showEvents">See events</button>
  </div>
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
    allEvents: {
      type: Array,
      default() {
        return [
          {
            id: 0,
            eventName: "default",
            eventLocation: "somewhere",
            eventStartDate: 0,
            eventEndDate: 0,
            eventDescription: 0,
          },
        ];
      },
    },
  },
  methods: {
    async showEvents() {
      await this.$router.push({
        name: "parkname",
        params: { parkname: this.park.parkName },
      });
      console.log(this.$route.href.substring(7));
      for (let i = 0; i < this.allEvents.length; i++) {
        if (this.allEvents[i].eventLocation == this.$route.href.substring(8)) {
          console.log(this.allEvents[i].eventName);
        }
      }
    },
  },
};
</script>
