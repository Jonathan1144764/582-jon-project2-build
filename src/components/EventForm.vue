<template>
  <form>
    <EventNameInput />
    <ParkSelect :allParks="allParks" />
    <EventDatesInputs />
    <EventDescriptionInput />
  </form>
</template>

<script>
import EventNameInput from "./EventNameInput.vue";
import EventDatesInputs from "./EventDatesInputs.vue";
import EventDescriptionInput from "./EventDescriptionInput.vue";
import ParkSelect from "./ParkSelect.vue";

export default {
  name: "EventForm",
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
            parkBathrooms: 0,
            parkPlaygrounds: 0,
          },
        ];
      },
    },
  },
  components: {
    EventNameInput,
    EventDatesInputs,
    EventDescriptionInput,
    ParkSelect,
  },
};
</script>
