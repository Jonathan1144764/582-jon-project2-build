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
    <!-- <div v-if="isShown" class="park-events"> -->

    <!-- </div> -->
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
    async showEvents() {
      this.parkEvents = [];
      this.isShown = true;
      await this.$router.push({
        name: "parkname",
        params: { parkname: this.park.parkName },
      });
      console.log(this.$route.href.substring(7));
      for (let i = 0; i < this.allEvents.length; i++) {
        if (this.allEvents[i].eventLocation == this.$route.href.substring(8)) {
          this.parkEvents.push(this.allEvents[i]);
          // let h3 = document.createElement("h3");
          // h3.textContent = this.allEvents[i].eventName;
          // let p1 = document.createElement("p");
          // p1.textContent = "At: " + this.allEvents[i].eventLocation;
          // let sp1 = document.createElement("span");
          // sp1.textContent = "Start: " + this.allEvents[i].eventStartDate + " ";
          // let sp2 = document.createElement("span");
          // sp2.textContent = "End: " + this.allEvents[i].eventEndDate + " ";
          // let p2 = document.createElement("p");
          // p2.appendChild(sp1);
          // p2.appendChild(sp2);
          // let p3 = document.createElement("p");
          // p3.textContent = this.allEvents[i].eventDescription;

          // let container = document.querySelector(".park-events");
          // container.appendChild(h3);
          // container.appendChild(p1);
          // container.appendChild(p2);
          // container.appendChild(p3);
        }
      }
    },
    closeWindow() {
      this.isShown = false;
    },
  },
};
</script>
