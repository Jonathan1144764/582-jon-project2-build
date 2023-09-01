<template>
  <form>
    <EventNameInput />
    <ParkSelect :allParks="allParks" />
    <EventDatesInputs />
    <EventDescriptionInput />
  </form>
  <SubmitEventButton :allEvents="allEvents" @refetchEvents="refetchEvents" />
</template>

<script>
import EventNameInput from "./EventNameInput.vue";
import EventDatesInputs from "./EventDatesInputs.vue";
import EventDescriptionInput from "./EventDescriptionInput.vue";
import ParkSelect from "./ParkSelect.vue";
import SubmitEventButton from "./SubmitEventButton.vue";

export default {
  name: "EventForm",
  emits: ["refetchEvents"],
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
    EventNameInput,
    EventDatesInputs,
    EventDescriptionInput,
    ParkSelect,
    SubmitEventButton,
  },
  methods: {
    refetchEvents(id) {
      this.$emit("refetchEvents", id);
    },
  },
};
</script>
