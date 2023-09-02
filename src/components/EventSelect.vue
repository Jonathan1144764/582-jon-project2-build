<template>
  <label for="events">Select Event: </label>
  <select name="events" id="events" @change="selectEvent">
    <option value=""></option>
    <option
      v-for="event in this.allEvents"
      :value="event.eventName"
      :key="event.id"
    >
      {{ event.eventName }}
    </option>
  </select>
</template>

<script>
export default {
  name: "EventSelect",
  emits: ["populateForm"],
  props: {
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
    selectEvent() {
      for (let i = 0; i < this.allEvents.length; i++) {
        if (this.allEvents[i].eventName == event.target.value) {
          let selectedEvent = this.allEvents[i];
          this.$emit("populateForm", selectedEvent);
        }
      }
    },
  },
};
</script>
