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
    <div v-if="isShown" class="park-events">
      <ExitWindow @closeWindow="closeWindow" />
      <ParkEvents v-for="event in parkEvents" :event="event" :key="event.id" />
    </div>
  </div>
</template>

<script>
import ExitWindow from "./ExitWindow.vue";
import ParkEvents from "./ParkEvents.vue";

export default {
  name: "ParkItem",
  data() {
    return {
      isShown: false,
      parkEvents: [],
    };
  },
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
  components: {
    ParkEvents,
    ExitWindow,
  },
  methods: {
    showEvents() {
      this.parkEvents = [];
      this.isShown = true;
      for (let i = 0; i < this.allEvents.length; i++) {
        if (this.allEvents[i].eventLocation == this.park.parkName) {
          this.parkEvents.push(this.allEvents[i]);
        }
      }
    },
    closeWindow() {
      this.isShown = false;
    },
  },
};
</script>
